import { Turma } from "./turma";

export class Disciplina {
  private codigo: number;
  private nome: string;
  private cargaHoraria: number;

  constructor(codigo: number, nome: string, cargaHoraria: number){
    this.codigo = codigo;
    this.nome = nome;
    this.cargaHoraria = cargaHoraria;
  }

  getNome(): string{
    return this.nome;
  }

  getCodigo(): number{ 
    return this.codigo;
  }

  getCargaHoraria(): number{
    return this.cargaHoraria;
  }
}
