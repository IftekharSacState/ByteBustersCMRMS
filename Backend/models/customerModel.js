const db = require("../config/db");

class Customer {
    static getAllCustomers(callback) {
        db.query("SELECT * FROM Customers", (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    }

    static createCustomer(newCustomer, callback) {
        const { name, email, phone, password } = newCustomer;
        db.query(
            "INSERT INTO Customers (name, email, phone, password) VALUES (?, ?, ?, ?)",
            [name, email, phone, password],
            (err, results) => {
                if (err) return callback(err);
                callback(null, results.insertId);
            }
        )
    }
}

module.exports = Customer;