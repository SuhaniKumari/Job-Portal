const { z } = require("zod");

const validate = (schema) => async (req, res, next) => {
    try {
        // Validate the request body using the provided schema
        schema.parse(req.body);

        // If validation succeeds, pass control to the next middleware
        next();
    } catch (err) {
        // If validation fails, handle the error
        const errorMessage = err.errors[0]?.message || "Validation error";
        console.error(errorMessage);
        res.status(400).json({ error: errorMessage });
    }
};

module.exports = validate;
