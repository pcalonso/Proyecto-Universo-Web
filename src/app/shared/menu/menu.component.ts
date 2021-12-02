import { Component } from '@angular/core';


interface MenuItem {
  ruta: string;
  texto: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
      li{
        cursor: pointer;
      }
    `
  ]
})
export class MenuComponent  {

    menu: MenuItem[] = [
      {ruta: "/micuenta/barras", texto: "Evolución Planes" },
      {ruta: "/micuenta/dona", texto: "Proporción Proyecto" },
      {ruta: "/micuenta/dona-http", texto: "Plan RSS" },
    ];
 }



