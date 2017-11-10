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
  }

  getTurmas(): void {
    this.turmaService.getTurmas().then(turmas => this.turmas = turmas);
  }
}
