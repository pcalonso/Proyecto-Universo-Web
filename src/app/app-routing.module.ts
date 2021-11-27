import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthGuard} from './auth/guards/auth.guard';
import { ValidarTokenGuard } from './auth/guards/auth.guard';

const routes: Routes = [

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
  },
  {
    path: "universoweb",
    loadChildren: () => import("./universoweb/universoweb.module"). then ( m=> m.UniversowebModule),
    // canLoad: [ ValidarTokenGuard],
    //Es este modulo el que queremos proteger cuando se logueen
    // canActivate: [ValidarTokenGuard]
  },
  {
    path: "cuenta",
    loadChildren: () => import("./cuenta/cuenta.module"). then ( m=> m.CuentaModule),
    canLoad: [ ValidarTokenGuard],
    //Es este modulo el que queremos proteger cuando se logueen
    canActivate: [ValidarTokenGuard]
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./protected/protected.module').then( m => m.ProtectedModule ),
    canActivate: [ ValidarTokenGuard ],
    canLoad: [ ValidarTokenGuard ]
  },
  {
    path: '**',
    redirectTo: 'auth'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }