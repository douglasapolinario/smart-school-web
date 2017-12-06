import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MaterializeModule } from 'angular2-materialize';

import { AlunoService } from './aluno.service';
import { AlunosRoutingModule } from './alunos-routing.module';
import { FormAlunoComponent } from './form-aluno/form-aluno.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterializeModule,
    AlunosRoutingModule
  ],
  declarations: [
    FormAlunoComponent
  ],
  exports: [
  ],
  providers: [
    AlunoService
  ]
})
export class AlunosModule { }
