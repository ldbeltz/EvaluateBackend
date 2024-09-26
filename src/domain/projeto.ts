import { Status } from './Status';
class Projeto {
  _nome: string;
  _descricao: string;
  _grupo: Grupo;
  _nota: number;
  _status: Status;

  associarGrupo(grupo: Grupo) {
    this._grupo = grupo;
  }

  calcularNota(avaliacoes: Avaliacao[]) {
    //todo
  }
}
