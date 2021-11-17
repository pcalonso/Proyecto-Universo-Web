import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanLoad, CanActivate {
  //inyectamos este constructor para poder hacer el if de abajo
  constructor( private authService: AuthService,
               private router: Router ){}

    canActivate(
     route: ActivatedRouteSnapshot,
     state: RouterStateSnapshot): Observable<boolean > | Promise<boolean > | boolean  {
      // if ( this.authService.auth.id ){
      //   return true;
      //   //Si esto existe, dejalo pasar, sino, salta al return false
      // }
      // console.log("Bloqueado por el AuthGuard - CanActivate")
      // //Mostramos como se bloquea por consola
      // return false;
      // //No puedes entrar en esta ruta porque necesitas loguearte
      return this.authService.verificaAutenticacion().pipe(
              tap( estaAutenticado => {
                if( !estaAutenticado){
                  this.router.navigate(["./auth.login"]);
                }
              })
      )
   }
  canLoad(
    //Con can Load podemos cargar el modulo pero con canActivate protegemos la ruta
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean>| boolean  {

      return this.authService.verificaAutenticacion().pipe(
        tap( estaAutenticado => {
          if( !estaAutenticado){
            this.router.navigate(["./auth.login"]);
          }
        })

      // if ( this.authService.auth.id ){
      //   return true;
      //   //Si esto existe, dejalo pasar, sino, salta al return false
      // }
      // console.log("Bloqueado por el AuthGuard - CanLoad")
      // //Mostramos como se bloquea por consola
      // return false;
      // //No puedes entrar en esta ruta porque necesitas loguearte
      )
    }
}
