import { Component, OnInit } from '@angular/core';
import { PlanesService } from '../../services/planes.service';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styles: [
  ]
})
export class PlanesComponent implements OnInit {

  constructor( private PlanesService: PlanesService) { }

  ngOnInit(): void {
    //Aqui lo vamos a llamar
    this.PlanesService.getPlanes().subscribe( resp=> console.log (resp));
  }

}
