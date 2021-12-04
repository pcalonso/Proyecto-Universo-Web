import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styleUrls: ['./barras.component.css']

})
export class BarrasComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['2021', '2022', '2023', '2024', '2025', '2026', '2027'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Desarrollo' , backgroundColor: "#142B73", hoverBackgroundColor: "#A8CF45"},
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Diseño', backgroundColor: "#43733C", hoverBackgroundColor: "#558351"},
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'RSS' , backgroundColor: "#081B26", hoverBackgroundColor: "#D3AD6B"},
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Copy', backgroundColor: "#D9A036", hoverBackgroundColor: "#163D64"},
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'SEO' , backgroundColor:"#142559", hoverBackgroundColor: "#025C8A"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public randomize(): void {
      this.barChartData[0].data = [
      //hacemos referencia al objeto y estoy cambiando la data, a lo que apunta
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40 ];
      //generamos de manera aleatoria
  }

}
