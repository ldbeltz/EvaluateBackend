import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { UsuarioEntity } from './usuarioEntity';

@Entity()
export class ProfessorEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 12 })
    matricula: string;

    @OneToOne(() => UsuarioEntity)
    @JoinColumn({ name: "id_user" })
    usuario: UsuarioEntity;
}