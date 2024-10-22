import express from "express";
import { ProfessorService } from "../services/professorService";
import { ProfessorRepository } from "../persistence/repositories/professorRepository";
import { appDataSource } from "../data-source";
import { ProfessorController } from "../controllers/professorController";


const router = express.Router();
const professorController = new ProfessorController(new ProfessorService(new ProfessorRepository(appDataSource))) 

router.get("/turmas/:codTurma", professorController.getTurma);
router.get("/turmas", professorController.getTurmas);
router.post("/disciplinas", professorController.cadastraDisciplina);
router.post("/turmas", professorController.cadastraTurma);
router.post("/projetos", professorController.cadastrarProjeto);

export default router;