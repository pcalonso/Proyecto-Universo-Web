import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';

import { CuentaRoutingModule} from "./cuenta-routing.module";
import { BarrasComponent } from './pages/barras/barras.component';
import { DonaComponent } from './pages/dona/dona.component';
import { DonaHttpComponent } from './pages/dona-http/dona-http.component';
import { GraficaBarraComponent } from './components/grafica-barra/grafica-barra.component';
import { MicuentaComponent } from './pages/micuenta/micuenta.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    BarrasComponent,
    DonaComponent,
    DonaHttpComponent,
    GraficaBarraComponent,
    MicuentaComponent,
 

 
    
  ],
  imports: [
    CommonModule,
    CuentaRoutingModule,
    ChartsModule,
    MaterialModule
 
  ]
})
export class CuentaModule { }

