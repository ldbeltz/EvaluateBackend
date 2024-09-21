class Admin extends Usuario {
  constructor(email: string, senha: string, nome: string, status: Status) {
    super(email, senha, nome, status);
  }
  cadastrarProfessor(professor: Professor) {
    //todo
  }
}
