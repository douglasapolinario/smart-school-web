import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {DetalheAlunoComponent} from './detalhe-aluno.component';

const routes: Routes = [
  { path: ':id', component: DetalheAlunoComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AlunosRoutingModule { }
