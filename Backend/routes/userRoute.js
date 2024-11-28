const express = require("express");
const router = express.Router();
const db = require("../db"); // Assuming db.js uses mysql2 for the connection

// Login Route
router.post("/login", async (req, res) => {
  console.log("coming from user");
  const { username, password } = req.body;

  console.log(username, password);

  try {
    // Check if the username exists in the database
    const [results] = await db
      .promise()
      .query("SELECT * FROM Users WHERE username = ? AND password = ?", [
        username,
        password,
      ]);

    // If user is not found
    if (results.length === 0) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid username or password" });
    }

    // Login successful
    return res.status(200).json({ success: true, message: "Login successful" });
  } catch (err) {
    console.error("Database error:", err.message);
    return res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
