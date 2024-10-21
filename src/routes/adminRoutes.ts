import express from "express";

import { AdminController} from "../controllers/adminController";
import { appDataSource } from "../data-source";
import { ProfessorRepository } from "../persistence/repositories/professorRepository";
import { repository } from "../repository";
import { ProfessorService } from "../services/professorService";
import { UsuarioService } from "../services/usuarioServices";

const router = express.Router();
const usuarioService = new UsuarioService(repository);
const professorService = new ProfessorService(new ProfessorRepository(appDataSource));
const adminController = new AdminController(usuarioService, professorService)


//router.get("/", getUser);
router.post("/professores", adminController.register)

export default router;
