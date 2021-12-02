// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// //modulos por defecto
// import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
// import { LoginComponent } from './pages/login/login.component';
// import { RegistroComponent } from './pages/registro/registro.component';
// import { AuthRoutingModule } from './auth-routing.module';
// import { MaterialModule } from '../material/material.module';
// import { MainComponent } from './pages/main/main.component';





// @NgModule({
//   declarations: [
//     LoginComponent,
//     RegistroComponent,
//     MainComponent,
   
  
//   ],
//   imports: [
//     CommonModule,
//     AuthRoutingModule,
//     //como estan los dos dentro de Auth, hay que unirlos mediante la importación
//     MaterialModule,
//     ReactiveFormsModule,
//     FormBuilder
//   ]
// })
// export class AuthModule { }
// //Tampoco vamos a exportar nada aqui
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { MainComponent } from './pages/main/main.component';


@NgModule({
  declarations: [LoginComponent, RegistroComponent, MainComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
  ]
})
export class AuthModule { }