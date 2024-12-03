const express = require("express");
const { createOrder, saveRegistration } = require("../controllers/paymentController");

const router = express.Router();
router.post("/order", createOrder);
router.post("/register", saveRegistration);

module.exports = router;
