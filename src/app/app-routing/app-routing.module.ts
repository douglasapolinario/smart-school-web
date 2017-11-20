import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormTurmaComponent } from './../turmas/form-turma.component';
import { TurmasComponent } from './../turmas/turmas.component';
import {AlunosComponent} from '../alunos/alunos.component';
import {DetalheAlunoComponent} from "../alunos/detalhe-aluno.component";


const routes: Routes = [
  { path: '', redirectTo: '/turmas', pathMatch: 'full' },
  { path: 'turmas', component: TurmasComponent },
  { path: 'form-turma', component: FormTurmaComponent },
  { path: 'form-turma/:id', component: FormTurmaComponent },
  { path: 'aluno/:id', component: DetalheAlunoComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
