import { Aluno } from './../alunos/aluno';

export class Turma {
    id: number;
    ano: number;
    turma: string;
    coordenador: string;
    periodo: string;
    etapa: string;
    alunos: Aluno[];
}
