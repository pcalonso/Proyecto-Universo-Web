import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanesService {

  constructor( private http: HttpClient) { }

    getPlanes () {
      return this.http.get("http://localhost:3000/planes" )
    }
}
