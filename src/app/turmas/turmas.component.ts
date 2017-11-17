import { TurmaService } from './turma.service';
import { Component, OnInit } from '@angular/core';

import { Turma } from './turma';

@Component({
  selector: 'app-turmas',
  templateUrl: './turmas.component.html',
  styleUrls: ['./turmas.component.css']
})
export class TurmasComponent implements OnInit {

  turmas: Turma[];

  constructor(private turmaService: TurmaService) { }

  ngOnInit() {
    this.getTurmas();
    console.log(this.turmas);
  }

  getTurmas(): void {
    this.turmaService.getAll().then(turmas => this.turmas = turmas);
  }
}
