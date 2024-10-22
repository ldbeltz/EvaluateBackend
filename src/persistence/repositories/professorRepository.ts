import { DataSource, EntityNotFoundError, Repository } from 'typeorm';
import { Professor } from '../../domain/professor';
import { Usuario } from '../../domain/usuario';
import { ProfessorEntity } from "../entities/professorEntity";
import { UsuarioEntity } from '../entities/usuarioEntity';
import { TurmaEntity } from '../entities/turmaEntity';
import { Turma } from '../../domain/turma';
import { DisciplinaEntity } from '../entities/disciplinaEntity';
import { Projeto } from '../../domain/projeto';
import { ProjetoEntity } from '../entities/projetoEntity';
import { GrupoEntity } from '../entities/grupoEntity';

export class ProfessorRepository {
    private professorPgRepository: Repository<ProfessorEntity>;
    private usuarioPgRepository: Repository<UsuarioEntity>;
    private turmaPgRepository: Repository<TurmaEntity>;
    private disciplinaPgRepository: Repository<DisciplinaEntity>;
    private projetoRepository: Repository<ProjetoEntity>;
    private grupoRepository: Repository<GrupoEntity>;

    constructor(dataSource: DataSource) {
          this.professorPgRepository = dataSource.getRepository(ProfessorEntity);
          this.usuarioPgRepository = dataSource.getRepository(UsuarioEntity);
          this.turmaPgRepository = dataSource.getRepository(TurmaEntity);
          this.disciplinaPgRepository = dataSource.getRepository(DisciplinaEntity);
      }

    async create(professor:Professor): Promise<Professor>{
      const usuario: Usuario = professor;
      const usuarioEntity = new UsuarioEntity();
      usuarioEntity.nome =  usuario.getNome();
      usuarioEntity.email = usuario.getEmail();
      usuarioEntity.senha_hash = usuario.getSenha();
      usuarioEntity.status_online = usuario.getStatus().valueOf();
      
      //Salva primeiro o usuario
      await this.usuarioPgRepository.save(usuarioEntity);
      
      const professorEntity = new ProfessorEntity();
      professorEntity.id = usuarioEntity.id;
      professorEntity.usuario = usuarioEntity;

      //Dps salva o professor
      await this.professorPgRepository.save(professorEntity);
      
      return professorEntity.asProfessor();

    }
        
    async findByMatricula(matricula: number): Promise<Professor> { 
      const foundProfessor: ProfessorEntity = await this.professorPgRepository.findOne({ where: { matricula: matricula } });
      return foundProfessor.asProfessor();
    }

    async findTurmaByCodigo(codTurma: number): Promise<Turma>{
      const foundTurma: TurmaEntity = await this.turmaPgRepository.findOne({
        where: {cod_turma: codTurma}
      })
      return foundTurma.asTurma();
    }

    async createTurma(turma: Turma): Promise<Turma>{

      const  disciplina: DisciplinaEntity = await this.disciplinaPgRepository.findOne({where : {codigo : turma.getCodDisciplina()}})
      if (!disciplina){
        return null;
      }


      const professor: ProfessorEntity = await this.professorPgRepository.findOne({where : {id : turma.getMatriculaProfessor()}})
      if(!professor){
        return null;
      }
    
      const turmaEntity = new TurmaEntity();
      turmaEntity.descricao = turma.getDescricao();
      turmaEntity.periodo = turma.getPeriodo();
      turmaEntity.disciplina = disciplina;
      turmaEntity.professor = professor;

      await this.turmaPgRepository.save(turmaEntity);

      return turmaEntity.asTurma();

    }

    async createProjeto(projeto: Projeto): Promise<Projeto>{

      const  grupo: GrupoEntity = await this.grupoRepository.findOne({where : {id : projeto.getCodGrupo()}})
      if (!grupo){
        return null;
      }


      const turma: TurmaEntity = await this.turmaPgRepository.findOne({where : {cod_turma : projeto.getCodTurma()}})
      if(!turma){
        return null;
      }
    
      const projetoEntity = new ProjetoEntity();
      projetoEntity.titulo = projeto.getTitulo();
      projetoEntity.descricao = projeto.getDescricao();
      projetoEntity.nota = projeto.getNota();
      projetoEntity.turma = turma;
      projetoEntity.grupo = grupo;

      await this.turmaPgRepository.save(projetoEntity);

      return projetoEntity.asProjeto();
    }
  }