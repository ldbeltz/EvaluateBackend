import express from "express";
import { UsuarioController } from "../controllers/usuarioController";
import { repository } from "../repository";
import { UsuarioService } from "../services/usuarioServices";
import { AlunoController } from "../controllers/alunoController";
import { AlunoService } from "../services/alunoService";
import { appDataSource } from "../data-source";
import { AlunoRepository } from "../persistence/repositories/alunoRepository";


const router = express.Router();
const usuarioController = new UsuarioController(new UsuarioService(repository));
const alunoController = new AlunoController(new AlunoService(new AlunoRepository(appDataSource)))

router.post("/", usuarioController.register);
router.post("/alunos/", alunoController.saveAluno);

export default router;
