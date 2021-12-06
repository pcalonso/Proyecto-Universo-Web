import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthGuard} from './auth/guards/auth.guard';
import { ValidarTokenGuard } from './auth/guards/auth.guard';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { EquipoComponent } from './universoweb/pages/equipo/equipo.component';
import { ContactoComponent } from './universoweb/pages/contacto/contacto.component';



const routes: Routes = [

  {
    path: "space",
    loadChildren: () =>import("./equipo/equipo.module"). then( m=> m.EquipoModule),
    // canLoad: [ ValidarTokenGuard],
    //Es este modulo el que queremos proteger cuando se logueen
    // canActivate: [ValidarTokenGuard]
  },
  // {
  //   path: "cuenta",
  //   loadChildren: () =>import("./personal/personal.module"). then( m=> m.PersonalModule),
    // canLoad: [ ValidarTokenGua/equipo/equipo.modulerd],
    //Es este modulo el que queremos proteger cuando se logueen
    // canActivate: [ValidarTokenGuard]
  
  
  {
    path: "universoweb",
    loadChildren: () => import("./universoweb/universoweb.module"). then( m=> m.UniversowebModule),
   
  },
  {
    path: "contacto",
    loadChildren: () => import("./contacto/contacto.module"). then(m=> m.ContactoModule),
  },

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule),
  },
  {
    path: '404',
    component: ErrorPageComponent
  },

  {
    path: "micuenta",
    loadChildren: () => import("./account/account.module"). then ( m=> m.AccountModule),
    canLoad: [ ValidarTokenGuard],
    //Es este modulo el que queremos proteger cuando se logueen
    canActivate: [ValidarTokenGuard]
  },
  
  // {
  //   path: 'dashboard',
  //   loadChildren: () => import('./protected/protected.module').then( m => m.ProtectedModule ),
  //   canActivate: [ ValidarTokenGuard ],
  //   canLoad: [ ValidarTokenGuard ]
  // },
  {
    path: '**',
 
    redirectTo: 'universoweb'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }