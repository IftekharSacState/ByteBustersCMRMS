const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors"); // Import CORS
const db = require("./config/db.js");

// Load environment variables
dotenv.config();

// Initialize app
const app = express();

// Enable CORS
app.use(cors()); // Allows requests from all origins
// To restrict origins, you can configure cors like:
// app.use(cors({ origin: "http://specific-origin.com" }));

app.use(bodyParser.json());

// Import routes
const customerRoutes = require("./routes/customers.js");
const mechanicRoutes = require("./routes/mechanics.js");
const appointmentRoutes = require("./routes/appointments.js");
const feedbackRoutes = require("./routes/feedbacks.js");

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
