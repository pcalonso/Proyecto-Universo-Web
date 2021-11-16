import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent  {

  constructor( private router: Router) { }
  login() {
    //Iremos al backend
    //Tiene que existir un usuario
    //Lo almanezaremos en un servicio

    this.router.navigate(["./universoweb"])
  }


}
