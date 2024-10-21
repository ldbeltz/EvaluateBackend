import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { UsuarioEntity } from './usuarioEntity';
import { Aluno } from '../../domain/aluno';

@Entity("aluno")
export class AlunoEntity {
    @Column()
    id: number;

    @PrimaryGeneratedColumn()
    matricula: number;

    @Column({ length: 45 })
    curso: string;

    @OneToOne(() => UsuarioEntity)
    @JoinColumn({ name: "id_user" })
    usuario: UsuarioEntity;

    asAluno(){
        const aluno :Aluno = new Aluno(this.usuario.email, this.usuario.nome, this.usuario.senha_hash, this.curso, this.matricula);
        if (this.usuario.status_online === 0){
            aluno.inativarUsuario();
        }
        return aluno;
    }
}
