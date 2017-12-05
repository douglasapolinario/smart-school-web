import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MaterializeModule } from 'angular2-materialize';

import { AlunoService } from './aluno.service';
import { DetalheAlunoComponent } from './detalhe-aluno.component';
import { AlunosComponent } from './alunos.component';
import { AlunosRoutingModule } from './alunos-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterializeModule,
    AlunosRoutingModule
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
