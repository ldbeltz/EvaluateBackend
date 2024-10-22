import {Request, Response} from "express";
import { Turma } from "../domain/turma";
import { ProfessorService } from "../services/professorService";
import { Disciplina } from "../domain/disciplina";
import { Projeto } from "../domain/projeto";

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

    getTurmas = async (req: Request, res: Response): Promise<Turma[]> => {
        try {
            //login token
            const foundTurmas = await this.professorService.getAllTurmas();
            res.status(200).send(foundTurmas); 
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

    cadastraDisciplina = async (req: Request, res: Response): Promise<Disciplina> => {
        try {
            //login token
            const disciplina = new Disciplina(null, req.body.nome, req.body.sigla, req.body.cargaHoraria);
            const savedDisciplina = await this.professorService.cadastrarDisciplina(disciplina);
            res.status(201).send(savedDisciplina); 
        }
        catch(error){
            if (error instanceof Error){
                return res.status(404).send(error.message);
            } else{
                throw new Error(error);
            }   
        }
    }


    cadastrarProjeto = async (req: Request, res: Response): Promise<Projeto> => {
        try {
            //login token
            const projeto = new Projeto(req.body.titulo, req.body.descricao, req.body.codGrupo, req.body.codTurma, req.body.status);
            const savedProjeto = await this.professorService.cadastrarProjeto(projeto);
            res.status(201).send(savedProjeto);  
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