const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 5000,
});

function handleDisconnect() {
  db.connect((err) => {
    if (err) {
      console.error("Error connecting to MySQL:", err);
      setTimeout(handleDisconnect, 2000); // Retry connection after 2 seconds
    } else {
      console.log("Connected to MySQL!");
    }
  });
}

db.on("error", (err) => {
  console.error("MySQL error:", err);
  if (err.code === "PROTOCOL_CONNECTION_LOST") {
    console.log("Reconnecting to MySQL...");
    handleDisconnect(); // Reconnect on connection loss
  } else {
    console.error("Fatal MySQL error:", err);
    // Decide whether to log or terminate
  }
});

// Initial connection
handleDisconnect();

module.exports = db;
