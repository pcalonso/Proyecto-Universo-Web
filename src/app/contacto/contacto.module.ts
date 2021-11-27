import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContactoRoutingModule } from './contacto-routing.module';
import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { SwitchesComponent } from './switches/switches.component';
import { CustomMinDirective } from './directives/custom-min.directive';
import { FormularioComponent } from './formulario/formulario.component';



@NgModule({
  declarations: [
    BasicosComponent,
    DinamicosComponent,
    SwitchesComponent,
    CustomMinDirective,
    FormularioComponent
    //declaramos la directiva, sino Angular no lo puede "ver"
  ],
  imports: [
    CommonModule,
    ContactoRoutingModule,
    FormsModule
    //tenemos que importarlo aqui porque es donde
    //lo vamos a usar. Ahora el navegador ya no hace
    //el refresh típico
  ]
})
export class TemplateModule { }

