import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { UsuarioEntity } from './usuarioEntity';

@Entity()
export class AlunoEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 12 })
    matricula: string;

    @Column({ length: 45 })
    curso: string;

    @OneToOne(() => UsuarioEntity)
    @JoinColumn({ name: "id_user" })
    usuario: UsuarioEntity;
}
