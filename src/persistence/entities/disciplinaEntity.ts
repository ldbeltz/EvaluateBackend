import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ProfessorEntity } from './professorEntity';
import { Disciplina } from '../../domain/disciplina';

@Entity("disciplina")
export class DisciplinaEntity {
    @PrimaryGeneratedColumn()
    codigo: number;

    @Column({ length: 100 })
    nome: string;

    @Column()
    cargaHoraria: number

    asDisciplina(): Disciplina{
        return new Disciplina(this.codigo, this.nome, this.cargaHoraria);
    }

}
