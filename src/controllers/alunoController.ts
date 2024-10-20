import {Request, Response} from "express";
import { Aluno } from "../domain/aluno";
import { AlunoService } from "../services/alunoService";

export class AlunoController{
    private alunoService: AlunoService;

    constructor(alunoService: AlunoService){
        this.alunoService = alunoService;
    }


    getAluno = async (req: Request, res: Response): Promise<Aluno> => {
        try {
            //login token
            const foundAluno = await this.alunoService.getByMatricula(req.body.matricula);
            res.status(200).send(foundAluno); 
        }
        catch(error){
            if (error instanceof Error){
                return res.status(404).send(error.message);
            } else{
                throw new Error(error);
            }   
        }
    };

    saveAluno = async (req: Request, res: Response): Promise<Aluno> => {
        try {
            //login token
            const aluno = new Aluno(req.body.email, req.body.senha, req.body.nome, req.body.curso, null);
            const savedAluno = await this.alunoService.saveAluno(aluno);
            res.status(201).send(savedAluno); 
        }
        catch(error){
            if (error instanceof Error){
                return res.status(404).send(error.message);
            } else{
                throw new Error(error);
            }   
        }
    };
}