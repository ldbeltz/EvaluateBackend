import { Avaliacao } from "./avaliacao";
import { Status } from "./Status";

export class Projeto {
  private titulo: string;
  private descricao: string;
  private codGrupo: number;
  private codTurma: number;
  private nota: number = 0;
  private status: Status;

  constructor(titulo: string, descricao: string, codGrupo:number, codTurma: number,  status: Status){
      this.titulo = titulo;
      this.descricao = descricao;
      this.codGrupo = codGrupo;
      this.status = status;
  }

  getTitulo(): string{
    return this.titulo;
  }

  getDescricao(){
    return this.descricao;
  }

  getNota(){
    return this.nota;
  }

  getCodTurma(){
    return this.codTurma;
  }

  getCodGrupo(){
    return this.codGrupo;
  }


  calcularNota(avaliacoes: Avaliacao[]) {
    //todo
  }
}
