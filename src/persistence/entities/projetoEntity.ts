import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { TurmaEntity } from './turmaEntity';

@Entity("projeto")
export class ProjetoEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    titulo: string;

    @Column({ length: 255 })
    descricao: string;

    @Column('float')
    nota: number;

    @ManyToOne(() => TurmaEntity)
    @JoinColumn({ name: "id_turma" })
    turma: TurmaEntity;
}
