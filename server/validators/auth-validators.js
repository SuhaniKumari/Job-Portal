const { z } = require("zod");
const signupSchema = z.object({
    username: z
        .string({ required_error: "Name is required" })
        .trim()
        .min(3, { message: "Name must be atleast of 3 chars" })
        .max(255, { message: "not more than 255 chars" }),

    email: z
        .string({ required_error: "email is required" })
        // .email({ message: "invalid email" })
        .trim()
        .min(3, { message: "email must be atleast of 3 chars" })
        .max(255, { message: "not more than 255 chars" }),

    phone: z
        .string({ required_error: "phone is required" })
        .trim()
        .min(10, { message: "phone must be atleast of 10 chars" })
        .max(255, { message: "not more than 255 chars" }),

    password: z
        .string({ required_error: "password is required" })
        .trim()
        .min(4, { message: "pawd must be atleast of 4 chars" })
        .max(255, { message: "not more than 255 chars" }),

});
module.exports = signupSchema;