import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { isUndefined } from 'util';


import {Aluno} from '../aluno';
import {AlunoService} from '../aluno.service';

@Component({
  selector: 'app-form-aluno',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class FormAlunoComponent implements OnInit {

  @Input() aluno: Aluno = new Aluno();

  isActive: boolean;

  constructor(
    private alunoService: AlunoService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.alunoService.getById(+params.get('id')))
      .subscribe(aluno => {
        this.aluno = aluno;

        if (isUndefined(this.aluno.id)) {
          this.isActive = false;
        } else {
          this.isActive = true;
        }
      });
  }

}
