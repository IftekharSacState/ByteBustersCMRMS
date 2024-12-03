const express = require("express");
const router = express.Router();
const db = require("../db"); // Import the original db connection

// Wrap the callback-based query in a Promise for async/await usage
function queryAsync(sql, params) {
  return new Promise((resolve, reject) => {
    db.query(sql, params, (err, results) => {
      if (err) {
        reject(err); // Reject the promise with the error
      } else {
        resolve(results); // Resolve the promise with the results
      }
    });
  });
}

// Get all appointments
router.get("/", async (req, res) => {
  try {
    const results = await queryAsync("SELECT * FROM Appointments");
    res.json(results); // Return the results as a JSON response
  } catch (err) {
    console.error("Database error:", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Create a new appointment
router.post("/", async (req, res) => {
  const { customerId, mechanicId, date, serviceType, status } = req.body;

  try {
    const result = await queryAsync(
      "INSERT INTO appointments (customerId, mechanicId, date, serviceType, status) VALUES (?, ?, ?, ?, ?)",
      [customerId, mechanicId, date, serviceType, status]
    );

    res.status(201).json({
      message: "Appointment created",
      id: result.insertId, // Send the new appointment's ID
    });
  } catch (err) {
    console.error("Database error:", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
