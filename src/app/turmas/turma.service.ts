import { Injectable } from '@angular/core';

import { Turma } from './turma';
import { TURMAS } from './mock-turma';

@Injectable()
export class TurmaService {

  getAll(): Promise<Turma[]> {
    return Promise.resolve(TURMAS);
  }


  getById(id: number): Promise<Turma> {
    if (id === 0) {
      return Promise.resolve(new Turma());
    } else {
      return this.getAll()
        .then(turmas => turmas.find(turma => turma.id === id));

    }
  }

  save(turma: Turma): void {
    this.getAll().then(turmas => {
      turmas.push(turma);
    });
  }

  delete(turma: Turma): void {
    this.getAll()
      .then(turmas => {
        console.log(turma);
        console.log(turmas.length);
        delete turmas[turmas.indexOf(turma)];
        console.log(turmas.length);
      });
  }

}
