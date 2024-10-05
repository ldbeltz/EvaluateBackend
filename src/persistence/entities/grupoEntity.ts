import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class GrupoEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    descricao: string;
}
