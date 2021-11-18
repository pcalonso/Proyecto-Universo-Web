import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { CuentaService } from '../../services/cuenta.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartLabels: Label[] = [//'Realizado', 'Actualmente', 'Futuro', 'Revisión para entrega'
];
  //comentamos este arreglo de labels porque son los que están harcodeados
  public doughnutChartData: MultiDataSet = [
    //[45, 35, 10, 10],
    //Comentamos también este arreglo de valores pero la grafica sigue ahí detrás
    
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

  constructor( private cuentaService: CuentaService) { }
  //lo inyectamos
  ngOnInit(): void {
  //aqui lo llamamos
    this.cuentaService.getUsuariosRedesSociales()
      .subscribe( data => {
        //para que se dispare la data hay que hacer este suscribe
        console. log(data);
        const labels = Object.keys( data );
        const values = Object.values( data );
      
        this.doughnutChartLabels = labels;
        //Así extraemos las llaves de los labels
        this.doughnutChartData.push( values);
        //Así extraemos las llaves de los values

      });
  }

}


