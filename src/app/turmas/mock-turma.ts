import { ALUNOS } from './../alunos/mock-aluno';
import { Turma } from './turma';

export const TURMAS: Turma[] = [
    {id: 1, ano: 1, turma: 'A', coordenador: 'Tereza', etapa: 'Fundamental', periodo: 'Manha',
        alunos: ALUNOS },
    {id: 2, ano: 1, turma: 'B', coordenador: 'Maria', etapa: 'Fundamental', periodo: 'Tarde',
        alunos: ALUNOS},
    {id: 3, ano: 2, turma: 'A', coordenador: 'Silvana', etapa: 'Fundamental', periodo: 'Manha',
        alunos: ALUNOS},
    {id: 4, ano: 2, turma: 'B', coordenador: 'Gil', etapa: 'Fundamental', periodo: 'Tarde',
        alunos: []},
    {id: 5, ano: 3, turma: 'A', coordenador: 'Pedro', etapa: 'Fundamental', periodo: 'Manha',
        alunos: []},
    {id: 6, ano: 3, turma: 'B', coordenador: 'Marta', etapa: 'Fundamental', periodo: 'Tarde',
        alunos: []},
    {id: 7, ano: 1, turma: 'A', coordenador: 'Pedro', etapa: 'Medio', periodo: 'Manha',
        alunos: []},
    {id: 8, ano: 1, turma: 'B', coordenador: 'Marta', etapa: 'Medio', periodo: 'Tarde',
        alunos: []}
];
