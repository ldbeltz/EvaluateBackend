class Aluno extends Usuario {
  _matricula: number;

  constructor(
    email: string,
    senha: string,
    nome: string,
    status: Status,
    matricula: number
  ) {
    super(email, senha, nome, status);
    this._matricula = matricula;
  }

  realizarAvaliacao(codProjeto: number) {
    //todo
  }
}
