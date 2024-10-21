import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Aluno } from '../../domain/aluno';
import { Usuario } from '../../domain/usuario';

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

    @Column()
    status_online: number;
}
