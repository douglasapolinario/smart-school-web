import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MaterializeModule } from 'angular2-materialize';

import { AppRoutingModule } from './../app-routing/app-routing.module';
import { AlunoService } from './aluno.service';
import { DetalheAlunoComponent } from './detalhe-aluno.component';
import { AlunosComponent } from './alunos.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterializeModule,
    AppRoutingModule
  ],
  declarations: [
    AlunosComponent,
    DetalheAlunoComponent
  ],
  exports: [
    AlunosComponent
  ],
  providers: [
    AlunoService
  ]
})
export class AlunosModule { }
