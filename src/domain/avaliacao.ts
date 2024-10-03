import { Aluno } from "./aluno";
import { Projeto } from "./projeto";


export class Avaliacao {
  private nota: number;
  private projeto: Projeto;
  private aluno: Aluno;
  private avalicaoSubmetida: boolean;

  submeterAvaliacao() {
    //todo
    this.avalicaoSubmetida = true;
  }
}
