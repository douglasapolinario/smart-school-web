import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TurmaFormComponent } from './turma-form/turma-form.component';
import { TurmasComponent } from './turmas.component';

const routes: Routes = [
  { path: '', component: TurmasComponent },
  { path: 'new', component: TurmaFormComponent },
  { path: ':id/edit', component: TurmaFormComponent }
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
