import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Professor } from '../../domain/professor';
import { UsuarioEntity } from './usuarioEntity';

@Entity("professor")
export class ProfessorEntity {
    @Column()
    id: number;
    
    @PrimaryGeneratedColumn()
    matricula: number;

    @OneToOne(() => UsuarioEntity)
    @JoinColumn({ name: "id" })
    usuario: UsuarioEntity;

    asProfessor(): Professor{
        const professor :Professor = new Professor(this.usuario.email, this.usuario.nome, this.usuario.senha_hash, this.matricula);
        if (this.usuario.status_online === 0){
            professor.inativarUsuario();
        }
        return professor; 
    }
}