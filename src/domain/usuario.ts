import { Status } from './Status';

export class Usuario {
  private id: number;
  private email: string;
  private senha: string;
  private nome: string;
  private status: Status = Status.ativo;

  constructor(email: string, senha: string, nome: string) {
    this.email = email;
    this.senha = senha;
    this.nome = nome;
  }

  getId(): number{
    return this.id;
  }

  setId(id: number): void{
    this.id = id;
  }

  getNome():string{
    return this.nome;
  }

  getEmail(): string {
    return this.email;
  }
  getSenha(): string{
    return this.senha;
  }
  
  getStatus(): Status{
    return this.status;
  }

  setSenha(senha: string): void{
    this.senha = senha;
  }

  inativarUsuario(): void{
    this.status = Status.inativo;
  }
}
