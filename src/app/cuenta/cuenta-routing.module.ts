import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarrasComponent } from './pages/barras/barras.component';
import { DonaComponent } from './pages/dona/dona.component';
import { DonaHttpComponent } from './pages/dona-http/dona-http.component';
import { MicuentaComponent } from './pages/micuenta/micuenta.component';
import { ServiciosComponent } from '../universoweb/pages/servicios/servicios.component';
import { EquipoComponent } from '../universoweb/pages/equipo/equipo.component';
import { ContactoComponent } from '../universoweb/pages/contacto/contacto.component';
import { HomeComponent } from '../universoweb/pages/home/home.component';
const routes: Routes = [
  {
    path: "",
    component: MicuentaComponent,
    children: [
      { path: "barra", component: BarrasComponent },
      { path: "dona", component: DonaComponent },
      { path: "dona-http", component: DonaHttpComponent },
     // { path: "**", redirectTo: "error-page" },
      { path: "servicios", component: ServiciosComponent},
      { path: "equipo", component: EquipoComponent },
      { path: "contacto", component: ContactoComponent},
      { path: "home", component: HomeComponent}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CuentaRoutingModule { }
