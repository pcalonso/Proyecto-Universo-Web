import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Servicios } from "../interfaces/servicios.interface";


@Injectable({
  providedIn: "root"
})
export class ServiciosService {
  constructor( private http: HttpClient){}
  getServicios() {
   return this.http.get<Servicios[]>( "http://localhost:3000/servicios")
  }
}