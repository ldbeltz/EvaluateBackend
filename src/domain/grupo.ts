class Grupo {
  _alunos: Aluno[];

  incluirAluno(aluno: Aluno) {
    this._alunos.push(aluno);
  }

  removerAluno(aluno: Aluno): Aluno[] {
    const index: number = this._alunos.indexOf(aluno);

    if (index > -1) {
      this._alunos.splice(index, 1);
    }

    return this._alunos;
  }
}
