import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ChartComponent} from "ng-apexcharts";
import {ChartOptions} from "../../folder/folder.page";

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.scss'],
})
export class GraphicComponent  implements OnInit {

  @ViewChild("chart") chart: ChartComponent | undefined;
  public chartOptions: ChartOptions | undefined;
  @Input() data: number[] = [];
  @Input() totals: any;

  labels = ['Edmundo Gonzales', 'Nicolas Maduro', 'Otros']
  constructor() {

  }

  ngOnInit() {
    this.chartOptions = {
      series: this.data,
      chart: {
        width: "100%",
        type: "pie",
      },
      legends: {
        position: 'bottom',
        markers:{
          fillColors: ['#0d6efd','#dd3343','#343a40']
        }
      },
      labels: this.labels,
      fills: {
        type: "colors",
        opacity: 1,
        colors:['#0d6efd','#dd3343','#343a40']
      }
    };
  }

}
