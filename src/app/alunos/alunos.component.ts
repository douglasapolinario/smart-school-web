import {Component, Input, OnChanges, OnInit} from '@angular/core';

import { Aluno } from './aluno';
import { Turma } from '../turmas/turma';
import { AlunoService } from './aluno.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit, OnChanges {

  @Input() turma: Turma;
  alunos: Aluno[];

  constructor(private alunoService: AlunoService) { }

  ngOnChanges() {
    this.alunoService.getAllByTurma(this.turma)
      .then(alunos => this.alunos = alunos);
  }

  ngOnInit() { }

}
