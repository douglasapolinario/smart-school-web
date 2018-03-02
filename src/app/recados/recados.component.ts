import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-recados',
  templateUrl: './recados.component.html',
  styleUrls: ['./recados.component.css']
})
export class RecadosComponent implements OnInit {

  formulario: FormGroup;

  constructor(private formBuild: FormBuilder) { }

  ngOnInit() {
    this.formulario = this.formBuild.group({
      origem: [null, Validators.required],
      destino: [null, Validators.required],
      assunto: [null, Validators.required],
      texto: [null, Validators.required]
    });
  }

  enviar(): void {
    if (this.formulario.valid) {
      console.log('Enviando mensagem');
    } else {
      console.log(this.formulario);
      Object.keys(this.formulario.controls).forEach(campo => {
        this.formulario.get(campo).markAsTouched();
      });
    }
  }

  showCssError(campo) {
    return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;
  }
}
