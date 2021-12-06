import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


interface Persona{
  nombre: string;
  plan: Plan[];
}

interface Plan{
  id: number;
  nombre: string;
}
//creamos las interface que se van a manejar

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ["./dinamicos.component.css"
  ]
})
export class DinamicosComponent implements OnInit {

  nuevoPlan: string ="";
  persona: Persona ={
    //objeto inicializador del formulario para ver como funciona
    nombre: "Pamela",
    plan: [
      { id: 1, nombre : "RSS"},
      { id: 2, nombre: "Desarrollo Web"},
    ]
  }

  agregarPlan(){
    const nuevoPlan: Plan = {
      //este objeto necesita esta estructura, nombre y ID
      id: this.persona.plan.length + 1,
      //vemos el ultimo id y le sumamos uno
      nombre: this.nuevoPlan
    }

    this.persona.plan.push({...nuevoPlan});
    //uso el operador Spratt para esparcir todas las propiedades y así
    //nos aseguramos de que no vamos a mandar ninguna referencia al objeto
    this.nuevoPlan = "";
  }

  eliminar( index: number) {
    //recibo el elemento
    this.persona.plan.splice(index, 1);
    //splice se usa para borrar algo del arreglo, lo que quiero borrar y la cantidad

  }

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
  enviar () {
    console.log(this.miFormulario);
  }


}
