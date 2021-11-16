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
        this.router.navigate (["./universoweb"]);
      }
    })
    //this.router.navigate(["./universoweb"])
  }


}
