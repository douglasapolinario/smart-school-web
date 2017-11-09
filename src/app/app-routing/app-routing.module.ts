import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormTurmaComponent } from './../turmas/form-turma.component';
import { TurmasComponent } from './../turmas/turmas.component';


const routes: Routes = [
  { path: '', redirectTo: '/turmas', pathMatch: 'full' },
  { path: 'turmas', component: TurmasComponent },
  { path: 'form-turma', component: FormTurmaComponent }
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
