import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormTurmaComponent } from './form-turma/form-turma.component';
import { TurmasComponent } from './turmas.component';

const routes: Routes = [
  { path: 'turmas', component: TurmasComponent, children: [
    { path: 'new', component: FormTurmaComponent, outlet: 'mainOutlet' },
    { path: ':id/edit', component: FormTurmaComponent, outlet: 'mainOutlet' },
  ] }  
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
