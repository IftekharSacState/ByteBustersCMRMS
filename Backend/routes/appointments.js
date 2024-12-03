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

// Route to get all appointments for a specific customer (upcoming and previous)
router.get("/", async (req, res) => {
  // Assuming customerId is passed in the query parameters or via session
  const customerId = req.query.customerId; // This can be part of the query string

  if (!customerId) {
    return res.status(400).json({ error: "customerId is required" });
  }

  try {
    // Query for upcoming appointments (status != 'done' for the specific customer)
    const upcomingAppointments = await queryAsync(
      "SELECT * FROM Appointments WHERE status != 'done' AND customerId = ?",
      [customerId]
    );

    // Query for previous appointments (status = 'done' for the specific customer)
    const previousAppointments = await queryAsync(
      "SELECT * FROM Appointments WHERE status = 'done' AND customerId = ?",
      [customerId]
    );

    // Respond with both upcoming and previous appointments
    res.json({
      upcoming: upcomingAppointments,
      previous: previousAppointments,
    });
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
