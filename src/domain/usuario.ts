class Usuario {
  _email: String;
  _senha: String;
  _nome: String;
  _status: Status;

  constructor(email: string, senha: string, nome: string, status: Status) {
    this._email = email;
    this._senha = senha;
    this._nome = nome;
    this._status = status;
  }
}
