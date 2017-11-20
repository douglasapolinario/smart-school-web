import { Injectable } from '@angular/core';

import { Turma } from '../turmas/turma';
import { Aluno } from './aluno';
import { ALUNOS } from './mock-aluno';

@Injectable()
export class AlunoService {

  constructor() { }

  getAllByTurma(turma: Turma): Promise<Aluno[]> {
    const results: Aluno[] = [];

    ALUNOS.forEach(aluno => {
      if (turma.id === aluno.turma.id) {
        results.push(aluno);
      }
    });

    return Promise.resolve(results);
  }
}
