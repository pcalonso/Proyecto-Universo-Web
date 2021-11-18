import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { EquipoComponent } from './pages/equipo/equipo.component';
import { HomeComponent } from './pages/home/home.component';
import { PlanesComponent } from './pages/planes/planes.component';
import { ServicioComponent } from './pages/servicio/servicio.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';



const rutas: Routes = [
  {
    path: "",
    component: HomeComponent,
    //creamos este componente en el que quiero estar cuando esté en este path 
    children: [
  { path : "buscar", component: BuscarComponent},
  { path : "contacto", component: ContactoComponent},
  { path : "equipo", component: EquipoComponent},
  //{ path : "home", component: HomeComponent},
  { path : "planes", component: PlanesComponent},
  { path : "servicios", component: ServiciosComponent},
  { path: ":id", component: HomeComponent},
 
  ]
}
]



@NgModule({
    imports: [
      RouterModule.forChild( rutas )
  ],
    exports: [
      RouterModule
      //no se nos olvide exportar que si no no lo podemos usar
    ]
})
export class UniversowebRoutingModule { }
