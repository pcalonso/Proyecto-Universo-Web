import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from 'src/app/auth/services/auth.service';
import { Usuario } from '../../interfaces/auth.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
    .container {
      margin: 25px;
    }
  `
  ]
})
export class HomeComponent implements OnInit {
  
  //auth!:Auth;
  get auth(){
    //Es este auth el que vamos a pasar al home.html
    return this.authService.usuario;
  }

  constructor( private router:Router,
    //lo primero que hacemos es inyectar aqui el Auth Service que es donde tenemos lo de login
    //creada la inyección, podemos crear una nueva propiedad que es la linea 18. Pero
    //para poder reyenarlo con los datos del AuthService, tenemos que hacer el get 19
               private authService : AuthService) { }

  ngOnInit(): void {
  }

    login(){
      this.router.navigate (["./auth"])
    }

}
