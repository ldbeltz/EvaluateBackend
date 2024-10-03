import { Aluno } from "./aluno";
import { Projeto } from "./projeto";

export class Turma {
  private codigo: string;
  private periodo: string;
  private descricao: string;
  private projetos: Projeto[];
  private alunos: Aluno[];

  cadastrarAluno(aluno: Aluno) {
    this.alunos.push(aluno);
  }
  removerAluno(aluno: Aluno) {
    //todo
  }
  consultarAluno(matricula: number): Aluno {
    //todo
    return null;
  }
  listarAlunos(): Aluno[] {
    return null;
  }
}
