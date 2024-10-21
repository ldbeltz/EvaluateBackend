import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { AlunoEntity } from './alunoEntity';
import { TurmaEntity } from './turmaEntity';

@Entity("aluno_turma")
export class AlunoTurmaEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => AlunoEntity)
    @JoinColumn({ name: "id_aluno" })
    aluno: AlunoEntity;

    @ManyToOne(() => TurmaEntity)
    @JoinColumn({ name: "id_turma" })
    turma: TurmaEntity;
}
