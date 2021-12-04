import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { MicuentaComponent } from './pages/micuenta/micuenta.component';
import { BarrasComponent } from './pages/barras/barras.component';
import { DonaComponent } from './pages/dona/dona.component';
import { DonaHttpComponent } from './pages/donahttp/donahttp.component';
import { MaterialModule } from '../material/material.module';
import { ChartsModule } from 'ng2-charts';
import { MenuComponent } from '../shared/menu/menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HomeComponent } from '../universoweb/pages/home/home.component';
import { MatButtonModule } from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
@NgModule({
  declarations: [
    MicuentaComponent,
    BarrasComponent,
    DonaComponent,
    DonaHttpComponent,
    MenuComponent,
    
    
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    MaterialModule,
    ChartsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatButtonToggleModule
    
  
  ]
})
export class AccountModule { }
