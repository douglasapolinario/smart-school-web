import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormTurmaComponent } from './form-turma/form-turma.component';
import { TurmasComponent } from './turmas.component';

const routes: Routes = [
  { path: '', component: TurmasComponent },
  { path: 'new', component: FormTurmaComponent },
  { path: ':id/edit', component: FormTurmaComponent }  
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
export class TurmasRoutingModule { }