import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [
  {
    path: "",
    component: FormularioComponent,
    children: [
      { path: 'basicos', component: BasicosComponent },
      { path: 'dinamicos', component: DinamicosComponent },
      
     // { path: "**", redirectTo: basicos},
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  
})
export class ContactoRoutingModule { }
