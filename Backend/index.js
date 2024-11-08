const express = require("express"); // Import express
const connection = require("./database");

const app = express(); // Create an instance of express
const PORT = 3000; // Define a port for the server

// Middleware to parse JSON requests
app.use(express.json());

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello, World! This is your Express server!");
  connection.query("SELECT * FROM Users", (error, results, fields) => {
    if (error) throw error;
    console.log("Data received from Db:", results);
  });
});

app.get("/insert", (req, res) => {
  res.send("Inserting Davids information!");
  connection.query(
    "INSERT INTO Users VALUES(Null, 'David', 'password', 'David@David.com');",
    (error, results, fields) => {
      if (error) throw error;
      console.log("Data received from Db:", results);
    }
  );
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
