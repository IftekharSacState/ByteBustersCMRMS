const Customer = require('../models/customerModel');

exports.getAllCustomers = (req, res) => {
    Customer.getAllCustomers((err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(results);
    });
};

exports.createCustomer = (req, res) => {
    const { name, email, phone, password } = req.body;
    Customer.createCustomer({ name, email, phone, password }, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Customer created', id: results.insertId });
    });
};