const express = require("express");
const router = express.Router();

const adminController = require("../src/controllers/adminController");
const authController = require("../src/controllers/authController");


// Auth
router.post("/admins", adminController.postAdmin);
router.post("/admins/signin", authController.sign);
router.use("/admins", authController.check);

// Admin
router.get("/admins", adminController.getAdmin);
router.get("/admins/:id", adminController.getAdminById);
router.delete("/admins/:id", adminController.deleteAdmin);

module.exports = router;
