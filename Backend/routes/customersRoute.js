const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customerController");

// List of all the customers
router.get("/", customerController.getAllCustomers);
// Create a new customer
router.post("/", customerController.createCustomer);

module.exports = router;
