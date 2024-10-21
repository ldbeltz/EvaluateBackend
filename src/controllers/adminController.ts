import {Request, Response} from "express"
import { Professor } from "../domain/professor";
import { ProfessorService } from "../services/professorService";
import { UsuarioService } from "../services/usuarioServices";

export class AdminController{
  private usuarioService: UsuarioService;
  private professorService: ProfessorService;

  constructor(usuarioService: UsuarioService, professorService: ProfessorService){
      this.usuarioService = usuarioService;
      this.professorService = professorService;
  } 

  getUser =  async (req: Request, res: Response): Promise<void> => {
    try {
      res.status(200).send({
        mensagem: "User Details",
      });
    } catch (error) {
      res.status(500).json({ error: error.toString() });
    }
  }
  
  register =  async (req: Request, res: Response): Promise<void> => {
    try {
      const professorCriado = await this.professorService.saveProfessor(new Professor(req.body.email, req.body.senha, req.body.nome, null));
      return res.status(201).json(professorCriado);
    }catch(error){
      res.status(500).json({ message: error.message});
    }
  }
    
}


