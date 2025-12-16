const Contact = require("../models/contact-model");

const contacts = async (req, res) => {
    try {
       const response = req.body;
        await Contact.create(response);
        res.status(201).json({ message: 'Contact created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to create contact', error: error.message });
    }
        };
        
       
module.exports = contacts ;
