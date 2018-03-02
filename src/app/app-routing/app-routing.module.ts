import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import {RecadosComponent} from '../recados/recados.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'turmas', loadChildren: 'app/turmas/turmas.module#TurmasModule' },
  { path: 'alunos', loadChildren: 'app/alunos/alunos.module#AlunosModule' },
  { path: 'recados', component: RecadosComponent }
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
