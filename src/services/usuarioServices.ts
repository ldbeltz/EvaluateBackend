import { Usuario } from "../domain/usuario";
//import { Status } from "../domain/Status";
import { inMemoryUsuarioRepository } from "./interfaces/inMemoryUsuarioRepository"

export class UsuarioService{

    private usuarioRepository : inMemoryUsuarioRepository;

    constructor() {
        this.usuarioRepository = new inMemoryUsuarioRepository();
      }

    login(email: string, senha: string) {
        const foundUser =  this.usuarioRepository.findByCredentials(email, senha);
    
        if (!foundUser) throw new Error("Credenciais incorretas.");
    
        return foundUser;
    }

    createUser(usuario:Usuario) {
        this.usuarioRepository.create(usuario);
        return usuario;
    }
}