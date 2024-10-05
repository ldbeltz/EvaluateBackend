import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { DisciplinaEntity } from './disciplinaEntity';

@Entity()
export class TurmaEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 15 })
    codigo_turma: string;

    @Column({ length: 6 })
    periodo: string;

    @Column({ length: 255 })
    descricao: string;

    @ManyToOne(() => DisciplinaEntity)
    @JoinColumn({ name: "id_disciplina" })
    disciplina: DisciplinaEntity;
}
