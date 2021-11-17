import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanLoad {
  //inyectamos este constructor para poder hacer el if de abajo
  constructor( private authService: AuthService ){}

  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  canLoad(
    //Con can Load podemos cargar el modulo pero con canActivate protegemos la ruta
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean>| boolean  {

      if ( this.authService.auth.id ){
        return true;
        //Si esto existe, dejalo pasar, sino, salta al return false
      }
      console.log("Bloqueado por el AuthGuard")
      //Mostramos como se bloquea por consola
      return false;
      //No puedes entrar en esta ruta porque necesitas loguearte
  }
}
