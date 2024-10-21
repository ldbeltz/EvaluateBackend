import { Professor } from "../domain/professor";
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
    
    async getTurmaByCodigo(codTurma: number): Promise<Turma> {
        return await this.professorRepository.findTurmaByCodigo(codTurma);
    }

    async cadastraTurma(turma: Turma): Promise<Turma>{
        return await this.professorRepository.createTurma(turma);
    }
      
}