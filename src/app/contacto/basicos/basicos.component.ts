import { Component, OnInit , ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ["./basicos.component.css",
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  nombreValido (): boolean{
    return this.miFormulario?.controls.nombre?.invalid
            && this.miFormulario?.controls.nombre?.touched;
  }

  emailref (): boolean{
    return this.miFormulario?.controls.email.touched
            && this.miFormulario?.controls.email?.invalid;
            
  }

  comentarios (): boolean{
    return this.miFormulario?.controls.nombre.invalid
            && this.miFormulario?.controls.comentarios?.touched;
            
  }

  //guardar ( miFormulario: NgForm) {
    //lo comento porque vamos a usar View Child para resumir codigo en la validación
    enviar (){
    console.log(this.miFormulario);
  }
}
