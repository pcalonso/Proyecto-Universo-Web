import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../services/servicios.service';
import { Servicios } from "../../interfaces/servicios.interface";


@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styles: [
  ]
})
export class ServiciosComponent implements OnInit {
  servicios: Servicios[]=[];
  constructor( private serviciosService: ServiciosService) { }

  ngOnInit(): void {
    this.serviciosService.getServicios()
    .subscribe( servicios=> this.servicios=servicios);
    }
  }


