import { Aluno } from "./aluno";
import { Disciplina } from "./disciplina";
import { Professor } from "./professor";
import { Projeto } from "./projeto";

export class Turma {
  private codigo: number;
  private periodo: string;
  private descricao: string;
  private codDisciplina: number;
  private matriculaProfessor: number;
  private projetos: Projeto[];
  private alunos: Aluno[];

  constructor(codigo: number, periodo: string, descricao: string, codDisciplina: number, codProfessor: number){
    this.codigo = codigo;
    this.periodo = periodo;
    this.descricao = descricao;
    this.codDisciplina = codDisciplina;
    this.matriculaProfessor = codProfessor;
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
  getCodDisciplina(): number{
    return this.codDisciplina;
  }
  getMatriculaProfessor(): number{
    return this.matriculaProfessor;
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
