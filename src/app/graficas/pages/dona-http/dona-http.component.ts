import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartLabels: string[] = [];// = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Others' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ ],//350, 450, 100 ,300, 100, 23,54],
        backgroundColor: [
          '#A58DFA',
          '#64E022',
          '#ED9A18',
          '#FA8473',
          '#18AAED'
      ] },
      //{ data: [ 50, 150, 120 ] },
      //{ data: [ 250, 130, 70 ] }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  constructor(private graficasService: GraficasService) { }

  ngOnInit(): void {
/*     this.graficasService.getUsuariosRedesSociales().subscribe(data => {
     const labels = Object.keys(data);
     const values = Object.values(data);
     this.doughnutChartData.labels = labels;
     this.doughnutChartData.datasets[0].data = values;
    }); */

    this.graficasService.getUsuariosRedesSocialesDonaData().subscribe(({labels, values}) => {
      this.doughnutChartData.labels = labels;
      this.doughnutChartData.datasets[0].data = values;

    });
  }

}
