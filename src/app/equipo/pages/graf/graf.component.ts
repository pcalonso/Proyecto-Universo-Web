// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-graf',
//   templateUrl: './graf.component.html',
//   styles: [
//   ]
// })
// export class GrafComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import { Component, OnInit } from '@angular/core';
import { SingleDataSet, Label } from 'ng2-charts';
import { ChartType } from 'chart.js';
import { Color } from 'ng2-charts';

@Component({
  selector: 'app-graf',
  templateUrl: './graf.component.html',
  styleUrls: ['./graf.component.css']
})
export class GrafComponent implements OnInit {
  // PolarArea
  public polarAreaChartLabels: Label[] = ['Proyecto 1', 'Proyecto 2', 'Proyecto 3', 'Proyecto 4', 'Proyecto 5'];
  public polarAreaChartData: SingleDataSet = [ 6, 9, 12, 15, 18];
  public polarAreaLegend = true;
  

  public polarAreaChartType: ChartType = 'polarArea';
  

  constructor() { }

  ngOnInit(): void {
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
