import { Disciplina } from "../domain/disciplina";
import { Professor } from "../domain/professor";
import { Projeto } from "../domain/projeto";
import { Turma } from "../domain/turma";
import { ProfessorRepository } from "../persistence/repositories/professorRepository";

export class ProfessorService{
    private professorRepository: ProfessorRepository;
    
    constructor(professorRepository: ProfessorRepository){
        this.professorRepository = professorRepository;
    }

    async saveProfessor(professor: Professor): Promise<Professor> {
        return await this.professorRepository.create(professor);
      }
    async getAllTurmas(): Promise<Turma[]>{
        return await this.professorRepository.findAllTurmas();
    }
    async getTurmaByCodigo(codTurma: number): Promise<Turma> {
        return await this.professorRepository.findTurmaByCodigo(codTurma);
    }

    async cadastraTurma(turma: Turma): Promise<Turma>{
        return await this.professorRepository.createTurma(turma);
    }

    async cadastrarProjeto(projeto: Projeto): Promise<Projeto>{
        return await this.professorRepository.createProjeto(projeto);
    }

    async cadastrarDisciplina(disciplina: Disciplina): Promise<Disciplina>{
        return await this.professorRepository.createDisciplina(disciplina);
    }
      
}