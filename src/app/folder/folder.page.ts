import {Component, inject, Input, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart, ChartComponent, ApexLegend, ApexFill, ApexDataLabels
} from "ng-apexcharts";
import {DataService} from "../services/data.service";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  legends: ApexLegend;
  fills: ApexFill;
  labels: any;
};

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  public data = [7303480, 3316142, 267640];
  public states: any[] = [];
  public totals: any;
  constructor(private dataService: DataService, private router: Router) {
    this.states = dataService.getStates()
    this.totals = dataService.getTotals()
  }
  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
  goToState(id: any){
    this.router.navigate(['state', id])
  }
}
