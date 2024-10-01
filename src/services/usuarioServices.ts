import { Usuario } from "../domain/usuario";
import { Status } from "../domain/Status";
const usuarios = [
                    new Usuario("foo@email.com", "pass123", "foo", Status.ativo), 
                    new Usuario("foo2@email.com", "pass123", "foo", Status.ativo)
                ];

export async function login(email: String, senha: String) {
    const foundUser =  usuarios.find((u) => u.email === email && u.senha === senha);
    
    if (!foundUser) throw new Error("Usuario não encotrado.");

    return foundUser;
}