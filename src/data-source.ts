import { DataSource } from "typeorm";
import { AlunoEntity } from "./persistence/entities/alunoEntity";
import { AlunoGrupoEntity } from "./persistence/entities/alunoGrupoEntity";
import {  AlunoTurmaEntity } from "./persistence/entities/alunoTurmaEntity";
import { AvaliacaoEntity } from "./persistence/entities/avaliacaoEntity";
import { DisciplinaEntity } from "./persistence/entities/disciplinaEntity";
import { GrupoEntity } from "./persistence/entities/grupoEntity";
import { ProfessorEntity } from "./persistence/entities/professorEntity";
import { ProjetoEntity } from "./persistence/entities/projetoEntity";
import { TurmaEntity } from "./persistence/entities/turmaEntity";
import { UsuarioEntity } from "./persistence/entities/usuarioEntity";

export const appDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "postgres",
    synchronize: true,
    logging: true,
    entities: [AlunoEntity, AlunoGrupoEntity, AlunoTurmaEntity, AvaliacaoEntity, DisciplinaEntity, GrupoEntity, ProfessorEntity, ProjetoEntity, TurmaEntity, UsuarioEntity],
    subscribers: [],
    migrations: [],
});

