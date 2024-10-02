import express from "express";
import { UsuarioController } from "../controllers/usuarioController";

const router = express.Router();
const  usuarioController = new UsuarioController();

router.post("/", usuarioController.login);

export default router;