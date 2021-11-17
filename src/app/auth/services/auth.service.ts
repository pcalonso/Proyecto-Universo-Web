import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Auth } from "../interfaces/auth.interface";
import { map, tap } from "rxjs/operators";
import { Observable,of } from 'rxjs';


@Injectable({
  providedIn: 'root'
  //Como lo tenemos proveido en el root, tenemos acceso en toda la api y sólo lo 
  //tenemos que inyectar en los modulos que los necesitemos. Así es como se usan
  //los services en Angular. Nosotros nos movemos ahora a la home component
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _auth: Auth | undefined;
  //ahora necesitamos que los datos sean persistentes. Para ello, lo primero
  //que debemos hacer es almacenar el resultado en esta nueva propiedad
  //Como puede estar nulo, ponemos el |undefined

  get auth() {
    return { ...this._auth }
  }
  //Para mostrar el nombre en la pantalla del usuario al logearse, y tenemos un private
  //usaremos un get para poder mostrar y lo desestructuramos para asegurarnos que no 
  //se va a cambiar de alguna manera


  constructor( private http: HttpClient) { }

    verificaAutenticacion (): Observable<boolean> {
        if ( !localStorage.getItem("token")){
          return of (false);
        }
        return this.http.get<Auth>(`${ this.baseUrl }/usuarios/1 ` )
          .pipe(
            map( auth => {
               //para transformar
              this._auth = auth;
              //Asi podemos mantener la autenticación del usuario
              return true;
            })
           
          );
    }
 
     login(){
      return this.http.get<Auth>(`${ this.baseUrl }/usuarios/1 ` )
      //Y una vez hecha la interface, lo que hacemos ahora es decirle a este get que nos re
      //torne ese Auth creado
            .pipe (
              tap ( auth => this._auth = auth ),
              tap ( auth => localStorage.setItem("token", auth.email) ),
              //Con localStorage vemos por consola como se mantiene el usuario aunque 
              //refresquemos el navegador, es persistente. Sigue activo pero no puede acceder
              //a su cuenta. 
            );
      //Ahora, cuando alguien pase por el login, necesito almacenarlo en la propiedad
      //_auth.Pasamos por el operador tap para generar efectos secundarios
    }

}
