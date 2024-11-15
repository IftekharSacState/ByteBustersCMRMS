const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const db = require("./db.js");

// Load environment variables
dotenv.config();

// Initialize app
const app = express();
app.use(bodyParser.json());

// Import routes
const customerRoutes = require("./routes/customers");
const mechanicRoutes = require("./routes/mechanics");
const appointmentRoutes = require("./routes/appointments");
const feedbackRoutes = require("./routes/feedbacks");

// Use routes
app.use("/customers", customerRoutes);
app.use("/mechanics", mechanicRoutes);
app.use("/appointments", appointmentRoutes);
app.use("/feedbacks", feedbackRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
