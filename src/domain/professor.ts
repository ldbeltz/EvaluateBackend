import { Status } from "./Status";
import { Usuario } from "./usuario";
export class Professor extends Usuario {
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

  cadastrarDisciplina(codDisciplina: number) {
    //todo
  }
}
