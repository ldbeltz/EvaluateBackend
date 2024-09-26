
import { Status } from './Status';
import { Usuario } from './usuario';

class Aluno extends Usuario {
  private _matricula: number;
  private avaliacoes: { codProjeto: number; nota: number }[] = [];

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

  realizarAvaliacao(codProjeto: number, nota: number) {
    this.avaliacoes.push({ codProjeto, nota });
  }

  getMatricula(): number {
    return this._matricula;
  }

  toString(): string {
    return `Aluno: ${this._nome}, Matrícula: ${this._matricula}, Status: ${Status[this._status]}`;
  }

  listarAvaliacoes(): { codProjeto: number; nota: number }[] {
    return this.avaliacoes;
  }
}

// Bora testar essa bagaça
const aluno = new Aluno("andinho@teste.com", "seila123", "JoãoDoDanone", Status.ativo, 123456);
aluno.realizarAvaliacao(1, 6.5);
aluno.realizarAvaliacao(2, 7.0);
console.log(aluno.toString());
console.log(aluno.listarAvaliacoes());