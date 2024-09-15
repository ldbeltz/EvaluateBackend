class Aluno extends Usuario {
  constructor(email, senha, nome, status, matricula, curso) {
    super(email, senha, nome, status);
    this.matricula = matricula;
    this.curso = curso;
  }

  realizarAvaliacao(codProjeto) {
    //todo
  }
}
