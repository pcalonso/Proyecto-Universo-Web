import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarioComponent } from './pages/calendario/calendario.component';
import { GrafComponent } from './pages/graf/graf.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { SpaceComponent } from './pages/space/space.component';
import { WireframesComponent } from './pages/wireframes/wireframes.component';

const routes: Routes = [
    {
        path: '',
        component: SpaceComponent,
        children: [
          { path: 'graf', component: GrafComponent},
          { path: 'calendario', component: CalendarioComponent},
          { path: "proyectos", component: ProyectosComponent},
          { path: 'wireframes', component: WireframesComponent},
        ]
    }      
           
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class EquipoRoutingModule { }