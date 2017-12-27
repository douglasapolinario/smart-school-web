import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      usuario: [null, Validators.required],
      senha: [null, Validators.required]
    });
  }

  login(): void {

    if (this.formulario.valid) {
      console.log('Efetua login');
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
