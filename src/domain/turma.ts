import { Aluno } from "./aluno";
import { Disciplina } from "./disciplina";
import { Professor } from "./professor";
import { Projeto } from "./projeto";

export class Turma {
  private codigo: number;
  private periodo: string;
  private descricao: string;
  private disciplina: Disciplina;
  private professor: Professor;
  private projetos: Projeto[];
  private alunos: Aluno[];

  constructor(codigo: number, periodo: string, descricao: string, disciplina: Disciplina, professor: Professor){
    this.codigo = codigo;
    this.periodo = periodo;
    this.descricao = descricao;
    this.disciplina = disciplina;
    this.professor = professor;
  }

  getDescricao(): string{
    return this.descricao;
  }
  getProjetos(): Projeto[]{
    return this.projetos;
  }
  getPeriodo(): string{
    return this.periodo;
  }
  getCodigo(): number{
    return this.codigo;
  }
  getDisciplina(): Disciplina{
    return this.disciplina;
  }
  getProfessor(): Professor{
    return this.professor;
  }

  cadastrarAluno(aluno: Aluno) {
    this.alunos.push(aluno);
  }
  removerAluno(aluno: Aluno) {
    //todo
  }
  consultarAluno(matricula: number): Aluno {
    //todo
    return null;
  }
  listarAlunos(): Aluno[] {
    return null;
  }
}
