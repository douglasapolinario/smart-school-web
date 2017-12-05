import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/turmas', pathMatch: 'full' },
  { path: 'turmas', loadChildren: 'app/turmas/turmas.module#TurmasModule' },
  { path: 'alunos', loadChildren: 'app/alunos/alunos.module#AlunosModule' }
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
