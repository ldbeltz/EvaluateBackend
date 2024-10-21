import { DataSource, Repository } from 'typeorm';
import { AlunoEntity } from '../entities/alunoEntity';
import { Aluno } from '../../domain/aluno';
import { UsuarioEntity } from '../entities/usuarioEntity';
import { Usuario } from '../../domain/usuario';

export class AlunoRepository {
  private alunoPgRepository: Repository<AlunoEntity>
  private usuarioPgRepository: Repository<UsuarioEntity>
  constructor(dataSource: DataSource) {
        this.alunoPgRepository = dataSource.getRepository(AlunoEntity);
        this.usuarioPgRepository = dataSource.getRepository(UsuarioEntity);
    }

    async create(aluno:Aluno): Promise<Aluno>{
      const usuario: Usuario = aluno;
      const usuarioEntity = new UsuarioEntity();
      usuarioEntity.nome =  usuario.getNome();
      usuarioEntity.email = usuario.getEmail();
      usuarioEntity.senha_hash = usuario.getSenha();
      usuarioEntity.status_online = 1;
//      usuarioEntity.status_online = aluno.getStatus().valueOf();

      //console.log(usuarioEntity);

      await this.usuarioPgRepository.save(usuarioEntity);
      
      //console.log(savedUsuario);

      const alunoEntity = new AlunoEntity();
      alunoEntity.id = usuarioEntity.id_user;
      alunoEntity.matricula = aluno.getMatricula();
      alunoEntity.curso = aluno.getCurso(); 
      alunoEntity.usuario = usuarioEntity;


      await this.alunoPgRepository.save(alunoEntity);
      
     return alunoEntity.asAluno();
     
    }
      
    findByMatricula(matricula: number) { 
    return this.alunoPgRepository.findOne({ where: { matricula: matricula } });
    }
}