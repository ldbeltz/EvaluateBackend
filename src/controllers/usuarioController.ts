import {Request, Response} from "express";
import { UsuarioService } from "../services/usuarioServices";
import { Usuario } from "../domain/usuario";

export class UsuarioController{

    private usuarioService: UsuarioService;
    
    constructor(usuarioService: UsuarioService){
        this.usuarioService = usuarioService;
    } 
    
    login = async (req: Request, res: Response): Promise<void> => {
        try {
            
            const foundUser = await this.usuarioService.login(req.body.email, req.body.senha);
            res.status(200).send(foundUser); 
        }
        catch(error){
            if (error instanceof Error){
                return res.status(401).send(error.message);
            } else{
                throw new Error(error);
            }   
        }
    }

    register = async (req: Request, res: Response): Promise<void> => {
        try {
            const usuarioCriado = await this.usuarioService.createUser(new Usuario(req.body.email, req.body.senha, req.body.nome));
            return res.status(201).json(usuarioCriado);
        }catch(error){
            res.status(500).json({ message: error.message });
        }
    }
}