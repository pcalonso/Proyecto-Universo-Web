import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipoRoutingModule } from './equipo-routing.module';
import { CalendarioComponent } from './pages/calendario/calendario.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { WireframesComponent } from './pages/wireframes/wireframes.component';
import { SpaceComponent } from './pages/space/space.component';
import { MaterialModule } from '../material/material.module';
import { MatIconModule } from '@angular/material/icon';
import { GrafComponent } from './pages/graf/graf.component';
import { MatNavList } from '@angular/material/list';
import { MatSidenavContainer } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    GrafComponent,
    CalendarioComponent,
    ProyectosComponent,
    WireframesComponent,
    SpaceComponent
  ],
  imports: [
    CommonModule,
    EquipoRoutingModule,
    MaterialModule,
    MatIconModule,
    ChartsModule,
    
    MatToolbarModule
  ]
})
export class EquipoModule { }
