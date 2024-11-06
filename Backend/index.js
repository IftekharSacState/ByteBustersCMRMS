const express = require("express"); // Import express
const app = express(); // Create an instance of express

const PORT = 3000; // Define a port for the server

// Middleware to parse JSON requests
app.use(express.json());

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello, World! This is your Express server!");
});

// Example route that handles a POST request
app.get("/data", (req, res) => {
  const { name } = req.body;
  res.send(`Hello, ${name}! Data received successfully.`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
