const express = require("express");
const router = express.Router();
const db = require("../config/db");

// Get all feedbacks
router.get("/", (req, res) => {
  db.query("SELECT * FROM Feedbacks", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// Create a new feedback
router.post("/", (req, res) => {
  const { customerId, mechanicId, rating, comments } = req.body;
  db.query(
    "INSERT INTO Feedbacks (customerId, mechanicId, rating, comments) VALUES (?, ?, ?, ?)",
    [customerId, mechanicId, rating, comments],
    (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: "Feedback created", id: results.insertId });
    }
  );
});

module.exports = router;
