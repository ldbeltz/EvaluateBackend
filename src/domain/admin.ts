import { Status } from './Status'; 
import { Usuario } from './usuario';
import { Professor } from './professor';

class Admin extends Usuario {
  private professores: Professor[] = [];
  
  constructor(email: string, senha: string, nome: string, status: Status) {
    super(email, senha, nome, status);

  }
    
    cadastrarProfessor(professor: Professor): void {
      this.professores.push(professor);
      console.log(`O Professor ${professor._nome} foi cadastrado com sucesso`);
      console.log(" Teste ");
    }

    listarProfessores(): void {
      console.log('Professores cadastrados:');
      this.professores.forEach((professor) => {
          console.log(`- ${professor._nome}, Matrícula: ${professor._matricula}`);
      });
  }

    excluirProfessor(matricula: number): void {
    const index = this.professores.findIndex(p => p._matricula === matricula);
    if (index !== -1) {
        const professor = this.professores[index];
        this.professores.splice(index, 1);
        console.log(`O Professor ${professor._nome} foi excluído com sucesso`);
    } else {
        console.log(`Professor com matrícula ${matricula} não encontrado`);
    }
  }

    alterarProfessor(matricula: number, novosDados: Partial<Professor>): void {
      const professor = this.professores.find(p => p._matricula === matricula);
      if (professor) {
          Object.assign(professor, novosDados);
          console.log(`O Professor ${professor._nome} foi alterado com sucesso!`);
      } else {
          console.log(`Professor com matrícula ${matricula} não encontrado.`);
      }
  }
}

const admin = new Admin('dono@example.com', 'senha123', 'gl', Status.ativo);
const Tiozinho = new Professor('Danone@example.com', 'seila123', 'Jabuticaba Da Silva', Status.ativo, 1234);
const Tiozinho1 = new Professor('Danone@example.com', 'seila123', 'Jabuticaba1 Da Silva', Status.ativo, 12345);
const Tiozinho2 = new Professor('Danone@example.com', 'seila123', 'Jabuticaba2 Da Silva', Status.ativo, 1234567);
const Tiozinho3 = new Professor('Danone@example.com', 'seila123', 'Jabuticaba3 Da Silva', Status.ativo, 12345689);

admin.cadastrarProfessor(Tiozinho); 
admin.cadastrarProfessor(Tiozinho1); 
admin.cadastrarProfessor(Tiozinho2); 
admin.cadastrarProfessor(Tiozinho3);
console.log('Exclusão//////////////////////////////////////////////////////')
admin.excluirProfessor(12345);
console.log('Alteração//////////////////////////////////////////////////////')
admin.alterarProfessor(12345689, {_nome: 'danoninhoOnline' })
console.log('Listando//////////////////////////////////////////////////////')
admin.listarProfessores(); 