class Professor extends Usuario {
  constructor(email, senha, nome, status, matricula) {
    super(email, senha, nome, status);
    this.matricula = matricula;
  }

  cadastrarDisciplina(codDisciplina) {
    //todo
  }
}
