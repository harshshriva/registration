import React, { useState } from "react";
import axios from "axios";
import { useRazorpay, RazorpayOrderOptions } from "react-razorpay";

const RegistrationForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
    const { error, isLoading, Razorpay } = useRazorpay();
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
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
        <form
            className="flex flex-col gap-4"
            onSubmit={(e) => {
                e.preventDefault();
                handlePayment();
            }}
        >
            <input
                type="text"
                name="name"
                placeholder="Name"
                className="p-2 border rounded"
                value={formData.name}
                onChange={handleInputChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                className="p-2 border rounded"
                value={formData.email}
                onChange={handleInputChange}
                required
            />
            <input
                type="tel"
                name="phone"
                placeholder="Phone"
                className="p-2 border rounded"
                value={formData.phone}
                onChange={handleInputChange}
                required
            />
            <button type="submit" className="bg-blue-600 text-white p-2 rounded">
                Pay ₹99 & Register
            </button>
        </form>
    );
};

export default RegistrationForm;
