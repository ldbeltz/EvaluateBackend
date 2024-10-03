import { Aluno } from "./aluno";

export class Grupo {
  private alunos: Aluno[];

  incluirAluno(aluno: Aluno) {
    this.alunos.push(aluno);
  }

  removerAluno(aluno: Aluno): Aluno[] {
    const index: number = this.alunos.indexOf(aluno);

    if (index > -1) {
      this.alunos.splice(index, 1);
    }

    return this.alunos;
  }
}
