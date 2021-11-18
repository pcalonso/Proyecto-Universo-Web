import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent  {

  persona ={
    genero:"F",
    //sólo para que el formulario siempre este activado
    notificaciones: true,
  }

  terminosYCondiciones: boolean = false;

}
