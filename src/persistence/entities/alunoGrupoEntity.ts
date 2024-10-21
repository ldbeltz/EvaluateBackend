import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { AlunoEntity } from './alunoEntity';
import { GrupoEntity } from './grupoEntity';

@Entity("aluno_grupo")
export class AlunoGrupoEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => AlunoEntity)
    @JoinColumn({ name: "id_aluno" })
    aluno: AlunoEntity;

    @ManyToOne(() => GrupoEntity)
    @JoinColumn({ name: "id_grupo" })
    grupo: GrupoEntity;
}
