import { Avaliacao } from "./avaliacao";
import { Grupo } from "./grupo";
import { Status } from "./Status";

export class Projeto {
  private nome: string;
  private descricao: string;
  private grupo: Grupo;
  private nota: number;
  private status: Status;

  associarGrupo(grupo: Grupo) {
    this.grupo = grupo;
  }

  calcularNota(avaliacoes: Avaliacao[]) {
    //todo
  }
}
