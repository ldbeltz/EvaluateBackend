import { DataSource, Repository } from 'typeorm';
import { Professor } from '../../domain/professor';
import { Usuario } from '../../domain/usuario';
import { ProfessorEntity } from "../entities/professorEntity";
import { UsuarioEntity } from '../entities/usuarioEntity';

export class ProfessorRepository {
    private professorPgRepository: Repository<ProfessorEntity>
    private usuarioPgRepository: Repository<UsuarioEntity>
    constructor(dataSource: DataSource) {
          this.professorPgRepository = dataSource.getRepository(ProfessorEntity);
          this.usuarioPgRepository = dataSource.getRepository(UsuarioEntity);
      }
  
      async create(professor:Professor): Promise<Professor>{
        const usuario: Usuario = professor;
        const usuarioEntity = new UsuarioEntity();
        usuarioEntity.nome =  usuario.getNome();
        usuarioEntity.email = usuario.getEmail();
        usuarioEntity.senha_hash = usuario.getSenha();
        usuarioEntity.status_online = usuario.getStatus().valueOf();
  
        await this.usuarioPgRepository.save(usuarioEntity);
        
        const professorEntity = new ProfessorEntity();
        professorEntity.id = usuarioEntity.id_user;
        //professorEntity.matricula = professor.getMatricula();
        professorEntity.usuario = usuarioEntity;
  
  
        await this.professorPgRepository.save(professorEntity);
        
        return professorEntity.asProfessor();
  
      }
        
      findByMatricula(matricula: number) { 
        return this.professorPgRepository.findOne({ where: { matricula: matricula } });
      }
  }