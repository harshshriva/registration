import React, { useState } from "react";
import axios from "axios";
import { useRazorpay, RazorpayOrderOptions } from "react-razorpay";
import { FaTimes } from "react-icons/fa";  // Import Font Awesome 'X' icon

const RegistrationForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", file: "" });
  const [filePreview, setFilePreview] = useState<string | null>(null);  // State for file preview
  const { error, isLoading, Razorpay } = useRazorpay();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, file: file.name });

      // Generate a preview of the uploaded image
      const reader = new FileReader();
      reader.onloadend = () => {
        setFilePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePayment = async () => {
    try {
      // Create Order
      const { data: order } = await axios.post("http://localhost:5000/api/payments/order", {
        amount: 99,
      });

      // Initiate Razorpay Payment
      const options: RazorpayOrderOptions = {
        key: "rzp_test_SRWjMLCvgUKGmj",
        amount: order.amount,
        currency: order.currency,
        name: "Art Competition",
        description: "Registration Fee",
        order_id: order.id,
        handler: async (response: any) => {
          alert("Payment Successful!");

          // Save Registration
          await axios.post("http://localhost:5000/api/payments/register", {
            ...formData,
            paymentId: response.razorpay_payment_id,
          });
        },
      };

      const razorpayInstance = new Razorpay(options);
      razorpayInstance.open();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg relative">
        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6 animate-slideIn">Register for the Competition</h2>
        <form
          className="flex flex-col gap-6 overflow-y-auto max-h-[70vh]"
          onSubmit={(e) => {
            e.preventDefault();
            handlePayment();
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
          <input
            type="file"
            name="file"
            onChange={handleFileChange}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          {/* Display image preview */}
          {filePreview && (
            <div className="mt-4">
              <h4 className="text-lg font-semibold text-indigo-600">Preview of Uploaded Image:</h4>
              <img src={filePreview} alt="File Preview" className="mt-2 w-full h-auto border rounded-lg" />
            </div>
          )}

          <button
            type="submit"
            className="bg-indigo-600 text-white p-3 rounded-lg shadow-lg hover:bg-indigo-700 transition"
          >
            Pay ₹99
          </button>
        </form>
        <button
          onClick={() => window.location.reload()}
          className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition"
        >
          <FaTimes className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default RegistrationForm;
