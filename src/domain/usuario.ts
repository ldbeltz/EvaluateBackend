import { Status } from './Status';

export class Usuario {
  _email: String;
  _senha: String;
  _nome: String;
  _status: Status;

  constructor(email: String, senha: String, nome: String, status: Status) {
    this._email = email;
    this._senha = senha;
    this._nome = nome;
    this._status = status;
  }

  get email(): String {
    return this._email;
  }
  get senha(): String{
    return this._senha;
  }
}
