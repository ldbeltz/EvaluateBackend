import { Usuario } from "../../domain/usuario";
import { IUsuarioRepository } from "./IUsuarioRepository";

export class inMemoryUsuarioRepository implements IUsuarioRepository<Usuario>{
    
    private usuarios: Usuario[] = [];
    private sequence: number = 1;

    create(usuario: Usuario): Usuario{
        usuario.setId(this.sequence)
        this.sequence++;
        this.usuarios.push(usuario);
        return usuario;
    }

    findById(id: number): Usuario | undefined {
        return this.usuarios.find(u => u.getId() === id);
    }

    findAll(): Usuario[]{
       return this.usuarios;     
    }

    delete(id: number): void{
        this.usuarios = this.usuarios.filter(u => u.getId() === id);
    }

    findByCredentials(email: string, senha: string): Usuario | undefined{
        const foundUser = this.usuarios.find(u => u.getEmail() === email && u.getSenha() === senha);
        return foundUser;
    }
}

