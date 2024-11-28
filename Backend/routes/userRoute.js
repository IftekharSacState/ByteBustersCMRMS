const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const db = require("../db");

// Login Route
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Check if username exists in the database
  db.query(
    "SELECT * FROM Users WHERE username = ?",
    [username],
    async (err, results) => {
      if (err) return res.status(500).json({ error: err });

      // If user is not found
      if (results.length === 0) {
        return res
          .status(401)
          .json({ success: false, message: "Invalid username or password" });
      }

      // Compare the provided password with the hashed password stored in the database
      const user = results[0];
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
        return res
          .status(200)
          .json({ success: true, message: "Login successful" });
      } else {
        return res
          .status(401)
          .json({ success: false, message: "Invalid username or password" });
      }
    }
  );
});

module.exports = router;
