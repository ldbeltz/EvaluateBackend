import {Request, Response} from "express";
import * as usuarioService from "../services/usuarioServices";

export const login = async (req: Request, res: Response) => {
    try {
        console.log(req.body.email);
        console.log(req.body.senha);
        const foundUser = await usuarioService.login(req.body.email, req.body.senha);
        
        res.status(200).send(foundUser); 
    }
    catch(error){
        return res.status(500).send(error);
    }
}