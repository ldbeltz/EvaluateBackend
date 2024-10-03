import { Professor } from "./professor";
import { Status } from "./Status";
import { Usuario } from "./usuario";

export class Admin extends Usuario {
  constructor(email: string, senha: string, nome: string) {
    super(email, senha, nome);
  }
  cadastrarProfessor(professor: Professor) {
    //todo
  }
}
