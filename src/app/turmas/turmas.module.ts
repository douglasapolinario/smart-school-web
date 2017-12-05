import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MaterializeModule } from 'angular2-materialize';

import { TurmasRoutingModule } from './turmas-routing.module';
import { TurmaService } from './turma.service';
import { FormTurmaComponent } from './form-turma/form-turma.component';
import { TurmasComponent } from './turmas.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterializeModule,
    TurmasRoutingModule
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
