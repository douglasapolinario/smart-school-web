import { Injectable } from '@angular/core';

import { Turma } from './turma';
import { TURMAS } from './mock-turma';

@Injectable()
export class TurmaService {

  getTurmas(): Promise<Turma[]> {
    return Promise.resolve(TURMAS);
  }

}
