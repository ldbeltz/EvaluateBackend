import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Aluno } from '../../domain/aluno';
import { Usuario } from '../../domain/usuario';

@Entity()
export class UsuarioEntity {
    @PrimaryGeneratedColumn()
    id_user: number;

    @Column({ length: 45 })
    nome: string;

    @Column({ length: 255 })
    email: string;

    @Column({ length: 255 })
    senha_hash: string;

    @Column('tinyint')
    status_online: number;

    static fromAluno(aluno: Aluno): UsuarioEntity{
        const usuarioEntity = new UsuarioEntity();
        usuarioEntity.nome = aluno.getNome();
        usuarioEntity.email = aluno.getEmail();
        usuarioEntity.id_user = aluno.getId();
        return usuarioEntity;
    }

    asUsuario(){
        const usuario = new Usuario(this.email, this.senha_hash, this.nome);
        usuario.setId(this.id_user);
        return usuario;
    }
}
