import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { TurmasComponent } from './turmas/turmas.component';
import { FormTurmaComponent } from './turmas/form-turma.component';
import { TurmaService } from './turmas/turma.service';

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
    FormTurmaComponent
  ],
  providers: [
    TurmaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
