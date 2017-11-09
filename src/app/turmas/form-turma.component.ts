import { Component, OnInit, Input } from '@angular/core';

import { TurmaService } from './turma.service';
import { Turma } from './turma';


@Component({
  selector: 'form-turma',
  templateUrl: './form-turma.component.html',
  styleUrls: ['./form-turma.component.css']
})
export class FormTurmaComponent implements OnInit {
  @Input() turma: Turma = new Turma();

  constructor(private turmaService: TurmaService) { }

  ngOnInit() {
  }

  save(): void {
    console.log(this.turma);
    this.turmaService.getTurmas().then(turmas => turmas.push(this.turma));
  }

}
