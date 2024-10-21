import { Professor } from "../domain/professor";
import { ProfessorRepository } from "../persistence/repositories/professorRepository";

export class ProfessorService{
    private professorRepository: ProfessorRepository;
    
    constructor(professorRepository: ProfessorRepository){
        this.professorRepository = professorRepository;
    }

    async saveProfessor(professor: Professor): Promise<Professor> {
        return await this.professorRepository.create(professor);
      }
      
}