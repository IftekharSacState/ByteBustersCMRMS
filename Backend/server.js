const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const path = require("path");
const db = require("./db.js");
const cors = require("cors");

// Load environment variables
dotenv.config();

// Initialize app
const app = express();

// Enable CORS for all origins
app.use(cors());

app.use(bodyParser.json());

// Serve static files from the Frontend directory
app.use(express.static(path.join(__dirname, "../Frontend/")));

// Import routes
const userRoutes = require("./routes/userRoute.js");
const customerRoutes = require("./routes/customersRoute.js");
const mechanicRoutes = require("./routes/mechanics.js");
const appointmentRoutes = require("./routes/appointments.js");
const feedbackRoutes = require("./routes/feedbacks.js");

// Use routes
app.use("/customers", customerRoutes);
app.use("/mechanics", mechanicRoutes);
app.use("/appointments", appointmentRoutes);
app.use("/feedbacks", feedbackRoutes);
app.use("/users", userRoutes);

// Serve the homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../Frontend/Homepage/index.html"));
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
