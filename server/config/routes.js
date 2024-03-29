const express = require("express");
const router = express.Router();

const adminController = require("../src/controller/adminController");
const authController = require("../src/controller/authController");
const alunoController = require("../src/controller/alunoController");
const avaliacaoController = require("../src/controller/avaliacaoController");

// Auth
router.post("/admins", adminController.postAdmin);
router.post("/admins/signin", authController.sign);
router.use("/admins", authController.check);
router.use("/alunos", authController.check);
router.use("/avaliacao", authController.check);

// Admin
router.get("/admins", adminController.getAdmin);
router.get("/admins/:id", adminController.getAdminById);
router.delete("/admins/:id", adminController.deleteAdmin);

// Aluno
router.post("/alunos", alunoController.postAluno);
router.get("/alunos/:id", alunoController.getAlunoById);
router.get("/alunos", alunoController.getAlunos);
router.put("/alunos/:id", alunoController.putEditAluno);
router.delete("/alunos/:id", alunoController.deleteAluno);

// Avaliacao
router.post("/avaliacao", avaliacaoController.postAvaliacao);
router.put("/avaliacao/:id", avaliacaoController.putEditAvaliacao);
router.get("/alunos/:id/avaliacoes", avaliacaoController.listarAvaliacoes);
router.get("/avaliacao/:id", avaliacaoController.getAvaliacaoById);
router.delete("/avaliacao/:id", avaliacaoController.deleteAvaliacao);

module.exports = router;
