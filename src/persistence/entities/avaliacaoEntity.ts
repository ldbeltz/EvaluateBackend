import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ProjetoEntity } from './projetoEntity';
import { AlunoEntity } from './alunoEntity';

@Entity("avaliacao")
export class AvaliacaoEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    descricao: string;

    @ManyToOne(() => ProjetoEntity)
    @JoinColumn({ name: "id_projeto" })
    projeto: ProjetoEntity;

    @ManyToOne(() => AlunoEntity)
    @JoinColumn({ name: "id_aluno" })
    aluno: AlunoEntity;

    @Column('text')
    resposta_texto: string;

    @Column({ length: 45 })
    Avaliacaocol: string;
}
