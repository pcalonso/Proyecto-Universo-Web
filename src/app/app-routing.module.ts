import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthGuard} from './auth/guards/auth.guard';
import { ValidarTokenGuard } from './auth/guards/auth.guard';

import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
  {
    path: "universoweb",
    loadChildren: () => import("./universoweb/universoweb.module"). then( m=> m.UniversowebModule),
   
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