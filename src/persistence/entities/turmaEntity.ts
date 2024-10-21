import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { DisciplinaEntity } from './disciplinaEntity';
import { Turma } from '../../domain/turma';
import { ProfessorEntity } from './professorEntity';

@Entity("turma")
export class TurmaEntity {
    @PrimaryGeneratedColumn()
    cod_turma: number;

    @Column({ length: 6 })
    periodo: string;

    @Column({ length: 255 })
    descricao: string;

    @ManyToOne(() => DisciplinaEntity)
    @JoinColumn({ name: "id_disciplina" })
    disciplina: DisciplinaEntity;

    @ManyToOne(() => ProfessorEntity)
    @JoinColumn({ name: "id" })
    professor: ProfessorEntity;

    asTurma(): Turma{
        return new Turma(this.cod_turma, this.periodo, this.descricao, this.disciplina.codigo, this.professor.matricula);
    }
}
