
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule } from './material/material.module';
import { UniversowebModule } from './universoweb/universoweb.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { PersonalModule } from './personal/personal.module';


@NgModule({
  declarations: [
    AppComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    UniversowebModule,
    BrowserAnimationsModule,
 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }