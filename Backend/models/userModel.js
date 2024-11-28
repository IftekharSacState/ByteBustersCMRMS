const db = require("../db");

class User {
  static Login(username, password) {
    db.query(
      "SELECT * FROM User WHERE username = '" +
        username +
        "' AND password = '" +
        password +
        "'",
      (err, results) => {
        if (results.length == 1) return true;
        else return false;
      }
    );
  }

  static Register(newCustomer, callback) {
    const { name, email, phone, password } = newCustomer;
    db.query(
      "INSERT INTO Customers (name, email, phone, password) VALUES (?, ?, ?, ?)",
      [name, email, phone, password],
      (err, results) => {
        if (err) return callback(err);
        callback(null, results.insertId);
      }
    );
  }
}

module.exports = Customer;
