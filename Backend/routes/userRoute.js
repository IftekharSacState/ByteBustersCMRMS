const express = require("express");
const router = express.Router();
const db = require("../db"); // Assuming db.js uses mysql2 for the connection

// Login Route
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if the username and password exist in the database
    const [results] = await db
      .promise()
      .query(
        "SELECT id, username, userType FROM Users WHERE username = ? AND password = ?",
        [username, password]
      );

    // If user is not found
    if (results.length === 0) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid username or password" });
    }

    // Extract user details
    const user = results[0];

    // Login successful - return user data
    return res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        id: user.id,
        username: user.username,
        userType: user.userType, // Optional: Include user role
      },
    });
  } catch (err) {
    console.error("Database error:", err.message);
    return res.status(500).json({ error: "Internal server error" });
  }
});

// Register Route
router.post("/register", async (req, res) => {
  const { username, password, firstname, lastname, email } = req.body;
  console.log(req.body);
  try {
    // Check if the username and password exist in the database
    const [results] = await db
      .promise()
      .query(
        "INSERT INTO Users(username, password, name, email) VALUES(?, ?, ?, ?)",
        [username, password, firstname + " " + lastname, email]
      );

    // Login successful - return user data
    return res.status(200).json({
      success: true,
      message: "Registration successful",
    });
  } catch (err) {
    console.error("Database error:", err.message);
    return res.status(500).json({ error: "Internal server error" });
  }
});

// Forgot Password Route
router.post("/forgotpassword", async (req, res) => {
  const { email } = req.body;
  console.log(email);

  try {
    // Check if the email exists in the database
    const [results] = await db
      .promise()
      .query("SELECT * FROM Users WHERE email = ?", [email]);

    // If user is not found
    if (results.length === 0) {
      return res
        .status(401)
        .json({ success: false, message: "Email not found" });
    }

    // Reset password to 'password'
    await db
      .promise()
      .query("UPDATE Users SET password = ? WHERE email = ?", [
        "password",
        email,
      ]);

    // Send email logic here
    return res.status(200).json({
      success: true,
      message: "Email found. Password has been reset to 'password'.",
    });
  } catch (err) {
    console.error("Database error:", err.message);
    return res.status(500).json({ error: "Internal server error" });
  }
});

// Get all mechanic names and ids
router.get("/mechanicslist", (req, res) => {
  db.query("SELECT id, name FROM Users WHERE userType = 'Mechanic'", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
})

module.exports = router;
