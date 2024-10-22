import { Turma } from "./turma";

export class Disciplina {
  private codigo: number;
  private nome: string;
  private sigla: string;
  private cargaHoraria: number;

  constructor(codigo: number, nome: string, sigla: string, cargaHoraria: number){
    this.codigo = codigo;
    this.nome = nome;
    this.sigla = sigla;
    this.cargaHoraria = cargaHoraria;
  }

  getNome(): string{
    return this.nome;
  }

  getCodigo(): number{ 
    return this.codigo;
  }

  getSigla():string{
    return this.sigla;
  }

  getCargaHoraria(): number{
    return this.cargaHoraria;
  }
}
