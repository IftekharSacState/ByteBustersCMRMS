const express = require("express");
const router = express.Router();
const db = require("../db"); // Assuming your db.js file is properly set up with mysql2

// Get all customers
router.get("/", (req, res) => {
  const query = "SELECT * FROM Users WHERE userType = 'Customer'";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching customers:", err.message);
      return res.status(500).json({ error: "Failed to fetch customers" });
    }
    res.status(200).json(results);
  });
});

// Get a customer by ID
router.get("/:id", (req, res) => {
  const query = "SELECT * FROM Users WHERE id = ? AND userType = 'Customer'";
  db.query(query, [req.params.id], (err, results) => {
    if (err) {
      console.error("Error fetching customer:", err.message);
      return res.status(500).json({ error: "Failed to fetch customer" });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: "Customer not found" });
    }
    res.status(200).json(results[0]);
  });
});

// Add a new customer
router.post("/", (req, res) => {
  const { username, password, name, email, phoneNumber } = req.body;

  const query =
    "INSERT INTO Users (username, password, name, email, phoneNumber, userType) VALUES (?, ?, ?, ?, ?, 'Customer')";
  db.query(
    query,
    [username, password, name, email, phoneNumber],
    (err, result) => {
      if (err) {
        console.error("Error adding customer:", err.message);
        return res.status(500).json({ error: "Failed to add customer" });
      }
      res.status(201).json({ success: true, userId: result.insertId });
    }
  );
});

// Update customer details
router.put("/:id", (req, res) => {
  const { name, email, phoneNumber } = req.body;
  const query =
    "UPDATE Users SET name = ?, email = ?, phoneNumber = ? WHERE id = ? AND userType = 'Customer'";

  db.query(query, [name, email, phoneNumber, req.params.id], (err, result) => {
    if (err) {
      console.error("Error updating customer:", err.message);
      return res.status(500).json({ error: "Failed to update customer" });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Customer not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Customer updated successfully" });
  });
});

// Delete a customer
router.delete("/:id", (req, res) => {
  const query = "DELETE FROM Users WHERE id = ? AND userType = 'Customer'";
  db.query(query, [req.params.id], (err, result) => {
    if (err) {
      console.error("Error deleting customer:", err.message);
      return res.status(500).json({ error: "Failed to delete customer" });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Customer not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Customer deleted successfully" });
  });
});

module.exports = router;
