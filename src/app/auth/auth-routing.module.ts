import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';


const routes: Routes = [
  {
    path: "",
    //no me importa la ruta, cuando alguien entre aqui, vamos a hacer esto otro
    children: [
      //rutas hijas que vamos a tener
      { path: "login", component: LoginComponent},
      { path: "registro", component: RegistroComponent},
      //{ path: "cuenta", component:CuentaComponent},
      { path: "**", redirectTo: "login"}

    ]
  }
]

@NgModule({
    imports: [ 
      RouterModule.forChild ( routes )
      //importamos el RouterModulo pero ahora no es forRoot que solo habra 1 en toda
      //la api, sino los hijos que acabamos de crear
    ],
    exports: [
      RouterModule
      //y como siempre exportamos el Router Module para usarlo en la api
    ]
   
})
export class AuthRoutingModule { }
