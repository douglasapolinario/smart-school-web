import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MaterializeModule } from 'angular2-materialize';

import { AppRoutingModule } from './../app-routing/app-routing.module';
// import { TurmasRoutingModule } from './turmas-routing.module';
import { AlunosModule } from '../alunos/alunos.module';
import { TurmaService } from './turma.service';
import { FormTurmaComponent } from './form-turma/form-turma.component';
import { TurmasComponent } from './turmas.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterializeModule,
    AppRoutingModule,
    // TurmasRoutingModule,
    AlunosModule
  ],
  declarations: [
    TurmasComponent,
    FormTurmaComponent
  ],
  providers: [
    TurmaService
  ]
})
export class TurmasModule { }
