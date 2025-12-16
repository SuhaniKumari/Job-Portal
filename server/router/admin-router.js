const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin-controllers");
const adminMiddleware = require("../validate-middleware/admin-middleware");




router.route('/users').get(adminMiddleware, adminController.getAllUsers);
router.route('/contacts').get( adminController.getAllContacts);





module.exports = router;