import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { TurmasComponent } from './turmas/turmas.component';
import { FormTurmaComponent } from './turmas/form-turma.component';
import { TurmaService } from './turmas/turma.service';
import { AlunosComponent } from './alunos/alunos.component';
import {AlunoService} from './alunos/aluno.service';
import { DetalheAlunoComponent } from './alunos/detalhe-aluno.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MaterializeModule
  ],
  declarations: [
    AppComponent,
    TurmasComponent,
    FormTurmaComponent,
    AlunosComponent,
    DetalheAlunoComponent
  ],
  providers: [
    TurmaService,
    AlunoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
