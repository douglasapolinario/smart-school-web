import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AlunosComponent} from '../alunos/alunos.component';
import {DetalheAlunoComponent} from "../alunos/detalhe-aluno.component";


const routes: Routes = [
  { path: '', redirectTo: '/turmas', pathMatch: 'full' },
  { path: 'turmas', loadChildren: 'app/turmas/turmas.module#TurmasModule' },
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
