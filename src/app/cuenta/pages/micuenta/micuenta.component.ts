import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Auth } from 'src/app/auth/interfaces/auth.interface';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-micuenta',
  templateUrl: './micuenta.component.html',
  styles: [`
  .container {
    margin: 25px;
  }
`
  ]
})
export class MicuentaComponent implements OnInit {

  
  //auth!:Auth;
  get auth(){
    //Es este auth el que vamos a pasar al home.html
    return this.authService.auth;
  }

  constructor( private router:Router,
    //lo primero que hacemos es inyectar aqui el Auth Service que es donde tenemos lo de login
    //creada la inyección, podemos crear una nueva propiedad que es la linea 18. Pero
    //para poder reyenarlo con los datos del AuthService, tenemos que hacer el get 19
               private authService : AuthService) { }

  ngOnInit(): void {
  }
  

    login(){
      this.router.navigate (["./cuenta"])
    }

}





