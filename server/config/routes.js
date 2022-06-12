const express = require("express");
const router = express.Router();

const adminController = require("../src/controller/adminController");
const authController = require("../src/controller/authController");
const alunoController = require("../src/controller/alunoController");

// Auth
router.post("/admins", adminController.postAdmin);
router.post("/admins/signin", authController.sign);
router.use("/admins", authController.check);

// Admin
router.get("/admins", adminController.getAdmin);
router.get("/admins/:id", adminController.getAdminById);
router.delete("/admins/:id", adminController.deleteAdmin);

// Aluno
router.post("/alunos", alunoController);
router.get("/alunos/:id", alunoController.getAlunoById);
router.get("/alunos", alunoController.getAluno);

module.exports = router;
