import { Usuario } from "../domain/usuario";
//import { Status } from "../domain/Status";
import { InMemoryUsuarioRepository } from "./interfaces/InMemoryUsuarioRepository"

export class UsuarioService{

    private usuarioRepository : InMemoryUsuarioRepository;

    constructor(usuarioRepository: InMemoryUsuarioRepository) {
        this.usuarioRepository = usuarioRepository;
      }

    async login(email: string, senha: string) {
        const foundUser =  this.usuarioRepository.findByCredentials(email, senha);
    
        if (!foundUser) throw new Error("Credenciais incorretas.");
    
        return foundUser;
    }

    async createUser(usuario:Usuario) {
        return await this.usuarioRepository.create(usuario);
    }
}