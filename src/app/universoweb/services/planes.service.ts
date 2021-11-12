import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Planes} from "../interfaces/planes.interface";


@Injectable({
  providedIn: "root"
})
export class PlanesService {
  constructor( private http: HttpClient){}
  getPlanes() {
   return this.http.get<Planes[]>( "http://localhost:3000/planes")
  }
}



