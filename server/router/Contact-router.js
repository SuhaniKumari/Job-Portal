const express = require("express");
const router = express.Router();
const contacts = require("../controllers/contact-controller");



router.route("/contact").post(contacts);
module.exports = router;