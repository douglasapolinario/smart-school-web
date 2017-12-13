import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormAlunoComponent } from './aluno-form/aluno-form.component';


const routes: Routes = [
  { path: ':id', component: FormAlunoComponent }
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
