import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { TurmaEntity } from './turmaEntity';
import { GrupoEntity } from './grupoEntity';
import { Projeto } from '../../domain/projeto';
import { Status } from '../../domain/Status';

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

    @Column()
    status: number;

    @ManyToOne(() => GrupoEntity)
    @JoinColumn({ name: "id" })
    grupo: GrupoEntity;

    @ManyToOne(() => TurmaEntity)
    @JoinColumn({ name: "id_turma" })
    turma: TurmaEntity;


    asProjeto(): Projeto{
        return new Projeto(this.titulo, this.descricao, this.grupo.id, this.turma.cod_turma, this.status);
    }
}
