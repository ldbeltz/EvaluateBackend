import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity("grupo")
export class GrupoEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    descricao: string;
}
