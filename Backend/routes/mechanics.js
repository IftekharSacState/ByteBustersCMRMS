const express = require("express");
const router = express.Router();
const db = require("../db");

// Get all mechanics
router.get("/", (req, res) => {
  db.query(
    "SELECT * FROM Users WHERE userType = 'Mechanic'",
    (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json(results);
    }
  );
});

// Create a new mechanic
router.post("/", (req, res) => {
  const { name, skillLevel, hoursWorked } = req.body;
  db.query(
    "INSERT INTO Mechanics (name, skillLevel, hoursWorked) VALUES (?, ?, ?)",
    [name, skillLevel, hoursWorked],
    (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: "Mechanic created", id: results.insertId });
    }
  );
});

module.exports = router;
