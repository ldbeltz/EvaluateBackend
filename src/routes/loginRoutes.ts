import express from "express";
import { UsuarioController } from "../controllers/usuarioController";
import { repository } from "../repository";
import { UsuarioService } from "../services/usuarioServices";

const router = express.Router();
const  usuarioController = new UsuarioController(new UsuarioService(repository));

router.post("/", usuarioController.login);

export default router;