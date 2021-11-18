import { Component } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl:'./dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  public doughnutChartLabels: Label[] = ['Realizado', 'Actualmente', 'Futuro', 'Revisión para entrega'];
  public doughnutChartData: MultiDataSet = [
    [45, 35, 10, 10],
    
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color []= [
    {
      backgroundColor: [
        "#142559",
        "#43733C",
        "#D9A036",
        "#F2E205"
      ]
    }
  ]
  //y aqui definimos los colores de Dona
}
