import { Status } from "./Status";
import { Usuario } from "./usuario";

export class Aluno extends Usuario {
  private matricula: number;
  private curso: string;
  constructor(
    email: string,
    senha: string,
    nome: string,
    curso: string,
    matricula: number
  ) {
    super(email, senha, nome);
    this.matricula = matricula;
    this.curso = curso;
  }

  getMatricula(): number{
    return this.matricula;
  }

  getCurso(): string{
    return this.curso;
  }

  realizarAvaliacao(codProjeto: number) {
    //todo
  }
}
