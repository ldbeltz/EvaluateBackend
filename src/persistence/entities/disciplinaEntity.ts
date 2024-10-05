import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ProfessorEntity } from './professorEntity';

@Entity()
export class DisciplinaEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    nome: string;

    @ManyToOne(() => ProfessorEntity)
    @JoinColumn({ name: "id_professor" })
    professor: ProfessorEntity;
}
