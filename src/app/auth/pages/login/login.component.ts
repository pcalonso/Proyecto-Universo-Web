import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent  {

  constructor( private router: Router,
               private authService: AuthService) { }
  login() {
    //Iremos al backend
    //Tiene que existir un usuario
    //Lo almanezaremos en un servicio
    this.authService.login().subscribe (resp=> {
      console.log(resp);

      if ( resp.id){
        this.router.navigate (["./cuenta"]);
        //queremos que al loguearse, acceda a su cuenta personal
        //que esta dentro de auth/cuenta
      }
    })
    //this.router.navigate(["./universoweb"])
  }


}
