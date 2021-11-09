import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module"). then ( m => m.AuthModule)
    //cuando entren en la ruta de auth, cargame los hijos importandomelos
    //en memoria, cuando pase eso, entonces,
    // (de ahi el .then) muestra este modulo que es donde
    //estan metidos estos children. Asi es como se hace la "carga perezosa"
  },
  {
    path: "universoweb",
    loadChildren: () => import("./universoweb/universoweb.module"). then ( m=> m.UniversowebModule)
  },
  {
    path: "404",
    //en esta ruta
    component: ErrorPageComponent
    //muestrame este componente que esta dentro del app component por lo que es GLOBAL
  },
  {
    path: "**",
    //si la ruta esta vacía
    redirectTo: "404"
    //sigue mostrandome esta ruta o path
  },
  
]


@NgModule({
   imports: [
    RouterModule.forRoot( routes )
    //importame este modulo de rutas con esta ruta principal,ahora solo hay 1
  ], 
    exports: [
      RouterModule
      //exportalo para poder usarlo en toda la aplicación
    ]
})
export class AppRoutingModule { }
