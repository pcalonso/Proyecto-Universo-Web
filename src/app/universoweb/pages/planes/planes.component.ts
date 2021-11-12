import { Component, OnInit } from '@angular/core';
import { PlanesService } from '../../services/planes.service';
import { Planes } from '../../interfaces/planes.interface';


@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styles: [`
      mat-card{
        margin-top: 20px
      }`
  ]
})
export class PlanesComponent implements OnInit {
  planes: Planes[]=[];
  constructor(  private planesService: PlanesService) { }

  ngOnInit(): void {
    //Aqui lo vamos a llamar
    this.planesService.getPlanes()
    .subscribe( planes=> this.planes=planes);
    }
  

}
