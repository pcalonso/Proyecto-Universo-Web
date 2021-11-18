import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//modulos por defecto

import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from '../material/material.module';




@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
   
  
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    //como estan los dos dentro de Auth, hay que unirlos mediante la importación
    MaterialModule
  ]
})
export class AuthModule { }
//Tampoco vamos a exportar nada aqui