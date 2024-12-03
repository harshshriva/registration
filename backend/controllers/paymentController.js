const Razorpay = require("razorpay");
const Registration = require("../models/Registration");

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

// Create Razorpay Order
exports.createOrder = async (req, res) => {
  const { amount } = req.body;
  const options = {
    amount: amount * 100, // Convert to paisa
    currency: "INR",
    receipt: `receipt_${Date.now()}`,
  };

  try {
    const order = await razorpay.orders.create(options);
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Save Registration Data
exports.saveRegistration = async (req, res) => {
  const { name, email, phone, paymentId } = req.body;

  try {
    const newRegistration = new Registration({ name, email, phone, paymentId });
    await newRegistration.save();
    res.status(201).json({ message: "Registration Successful" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
