import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {isUndefined} from 'util';

import { TurmaService } from '../turma.service';
import { Turma } from '../turma';


@Component({
  selector: 'app-form-turma',
  templateUrl: './form-turma.component.html',
  styleUrls: ['./form-turma.component.css']
})
export class FormTurmaComponent implements OnInit {
  @Input() turma: Turma = new Turma();

  isDisabled: boolean;
  isActive: boolean;

  constructor(
    private turmaService: TurmaService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.turmaService.getById(+params.get('id')))
      .subscribe(turma =>  {
        this.turma = turma;

        if (isUndefined(this.turma.id)) {
          this.isDisabled = true;
          this.isActive = false;
        } else {
          this.isDisabled = false;
          this.isActive = true;
        }
      });
  }

  save(): void {
    this.turmaService.save(this.turma);
  }

  delete(): void {
    this.turmaService.delete(this.turma);
  }

}
