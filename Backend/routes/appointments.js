const express = require("express");
const router = express.Router();
const db = require("../config/db");

// Get all appointments
router.get("/", (req, res) => {
  db.query("SELECT * FROM Appointments", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// Create a new appointment
router.post("/", (req, res) => {
  const { customerId, mechanicId, date, serviceType, status } = req.body;
  db.query(
    "INSERT INTO Appointments (customerId, mechanicId, date, serviceType, status) VALUES (?, ?, ?, ?, ?)",
    [customerId, mechanicId, date, serviceType, status],
    (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: "Appointment created", id: results.insertId });
    }
  );
});

module.exports = router;
