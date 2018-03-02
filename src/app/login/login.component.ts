import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginService} from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private loginService: LoginService) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      usuario: [null, Validators.required],
      senha: [null, Validators.required]
    });
  }

  login(): void {

    if (this.formulario.valid) {
      console.log('Efetuando login');
      this.loginService.getByEmailPassword(this.formulario.value.usuario, this.formulario.value.senha)
        .then(result => this.router.navigate(['turmas']))
        .catch(result => console.log('Erro no login'));
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
