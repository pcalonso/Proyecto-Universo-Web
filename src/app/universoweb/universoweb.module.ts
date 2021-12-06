import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//modulos por defecto

import { HomeComponent } from './pages/home/home.component';
import { PlanesComponent } from './pages/planes/planes.component';
import { EquipoComponent } from './pages/equipo/equipo.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { UniversowebRoutingModule } from './universoweb-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { ServicioComponent } from './pages/servicio/servicio.component';
import { ContactoModule } from '../contacto/contacto.module';



@NgModule({
  declarations: [
    HomeComponent,
    PlanesComponent,
    EquipoComponent,
    ServiciosComponent,
    ContactoComponent,
    BuscarComponent,
    ServicioComponent,
    
   
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    //importamos aqui el flex layout
    UniversowebRoutingModule,
    //como el routing y el module pertenecen a lo mismo, hay que unirlos
    MaterialModule,
    //todo lo exportado en el material modulo, va a ser importado aqui
    ContactoModule
  ],
  
})
export class UniversowebModule { }
//No se exporta nada porque vamos a cargar de "manera perezosa"