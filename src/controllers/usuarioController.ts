import {Request, Response} from "express";
import * as usuarioService from "../services/usuarioServices";


export async function login (req: Request, res: Response) {
    try {
        
        const foundUser = await usuarioService.login(req.body.email, req.body.senha);
        res.status(200).send(foundUser); 
    }
    catch(error){
        if (error instanceof Error){
            return res.status(404).send(error.message);
        } else{
            throw new Error(error);
        }
        
    }
}