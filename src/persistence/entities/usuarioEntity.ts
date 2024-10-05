import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class UsuarioEntity {
    @PrimaryGeneratedColumn()
    id_user: number;

    @Column({ length: 45 })
    nome: string;

    @Column({ length: 255 })
    email: string;

    @Column({ length: 255 })
    senha_hash: string;

    @Column('tinyint')
    status_online: number;
}
