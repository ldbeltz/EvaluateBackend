import { Usuario } from "./usuario";

export class Aluno extends Usuario {
  private matricula: number;

  constructor(
    email: string,
    senha: string,
    nome: string,
    matricula: number
  ) {
    super(email, senha, nome);
    this.matricula = matricula;
  }

  realizarAvaliacao(codProjeto: number) {
    //todo
  }
}
