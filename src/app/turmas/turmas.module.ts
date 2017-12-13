import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MaterializeModule } from 'angular2-materialize';

import { TurmasRoutingModule } from './turmas-routing.module';
import { TurmaService } from './turma.service';
import { TurmasComponent } from './turmas.component';
import { TurmaFormComponent } from './turma-form/turma-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterializeModule,
    TurmasRoutingModule
  ],
  declarations: [
    TurmasComponent,
    TurmaFormComponent
  ],
  providers: [
    TurmaService
  ]
})
export class TurmasModule { }
