const express = require("express");
const router = express.Router();
const db = require("../db");

// Get all customers
router.get("/", (req, res) => {
  db.query("SELECT * FROM Customers", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// Create a new customer
router.post("/", (req, res) => {
  const { name, email, phoneNumber } = req.body;
  console.log(req);
  db.query(
    "INSERT INTO Customers (name, email, phoneNumber) VALUES (?, ?, ?)",
    [name, email, phoneNumber],
    (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: "Customer created", id: results.insertId });
    }
  );
});

module.exports = router;
