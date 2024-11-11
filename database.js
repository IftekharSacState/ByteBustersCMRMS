const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "sql3.freemysqlhosting.net", // your database host, usually 'localhost' if local
  user: "sql3742939", // your database username
  password: "9aCXguAXMT", // your database password
  database: "sql3742939", // your database name
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error("Error connecting: " + err.stack);
    return;
  }
  console.log("Connected as id " + connection.threadId);
});

module.exports = connection;
