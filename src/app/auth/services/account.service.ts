import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor( private http: HttpClient) { }
  //Lo  inyectamos aqui y ahora creamos un método que nos sirva
  //para traer esa información

  getUsuariosRedesSociales() {
    return this.http.get("http://localhost:3000/grafica")
    //Y aqui le decimos que nos retorne una petición http con los datos
    //de esta ruta. Así tenemos ya los servicios implementados. Sólo queda llamar
    //a este método en el dona http
  }
}
