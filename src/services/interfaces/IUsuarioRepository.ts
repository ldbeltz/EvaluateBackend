export interface IUsuarioRepository<Usuario> {
    create(item: Usuario): Usuario;
    findById(id: number): Usuario | undefined;
    findAll(): Usuario[];
    delete(id: number): void;
    findByCredentials(email: string, senha:string): Usuario | undefined;
}