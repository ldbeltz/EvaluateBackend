import {Request, Response} from "express";
import { Turma } from "../domain/turma";
import { ProfessorService } from "../services/professorService";
import { Disciplina } from "../domain/disciplina";

export class ProfessorController{
    private professorService: ProfessorService;

    constructor(professorService: ProfessorService){
        this.professorService = professorService;
    }


    getTurma = async (req: Request, res: Response): Promise<Turma> => {
        try {
            //login token
            const foundTurma = await this.professorService.getTurmaByCodigo(req.params.codTurma);
            res.status(200).send(foundTurma); 
        }
        catch(error){
            if (error instanceof Error){
                return res.status(404).send(error.message);
            } else{
                throw new Error(error);
            }   
        }
    };

    cadastraTurma = async (req: Request, res: Response): Promise<Turma> => {
        try {
            //login token
            const turma = new Turma(null, req.body.periodo, req.body.descricao, req.body.codDisciplina, req.body.codProfessor);
            const savedTurma = await this.professorService.cadastraTurma(turma);
            res.status(201).send(savedTurma); 
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