import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MicuentaComponent } from './pages/micuenta/micuenta.component';
import { BarrasComponent } from './pages/barras/barras.component';
import { DonaComponent } from './pages/dona/dona.component';
import { DonaHttpComponent } from './pages/donahttp/donahttp.component';


const routes: Routes = [
  
  {
    path: '',
    component: MicuentaComponent,
   
    children: [
     
      { path: "barras", component: BarrasComponent },
      { path: "dona", component: DonaComponent },
      { path: "dona-http", component: DonaHttpComponent },
     
     
    ]
  },
  
 

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
