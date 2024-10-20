import { AlunoRepository } from '../persistence/repositories/alunoRepository';
import { AlunoEntity } from '../persistence/entities/alunoEntity';
import { Aluno } from '../domain/aluno';

export class AlunoService {
  private alunoRepository: AlunoRepository;
  
  constructor(alunorepository: AlunoRepository){
    this.alunoRepository = alunorepository;
  }

  async getByMatricula(matricula: number): Promise<AlunoEntity | undefined> {
    return await this.alunoRepository.findByMatricula(matricula);
  }

  async saveAluno(aluno: Aluno): Promise<Aluno> {
    return await this.alunoRepository.create(aluno);
  }

  // async updateAluno(id: number, alunoData: Partial<AlunoEntity>): Promise<AlunoEntity | undefined> {
  //   await this.alunoRepository.update(id, alunoData);
  //   return this.alunoRepository.findOne(id);
  // }

  // async deleteAluno(id: number): Promise<void> {
  //   await this.alunoRepository.delete(id);
  // }
}
