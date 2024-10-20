import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, PrimaryColumn } from 'typeorm';
import { UsuarioEntity } from './usuarioEntity';
import { Aluno } from '../../domain/aluno';

@Entity()
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

    static fromAluno(aluno:Aluno, usuario: UsuarioEntity): AlunoEntity{
       const alunoEntity = new AlunoEntity()
       alunoEntity.id = aluno.getId();
       alunoEntity.matricula = aluno.getMatricula();
       alunoEntity.curso = aluno.getCurso(); 
       alunoEntity.usuario = usuario;
       return alunoEntity;
    }

    asAluno(){
        return new Aluno(this.usuario.email, this.usuario.nome, this.usuario.senha_hash, this.curso, this.matricula);
    }
}
