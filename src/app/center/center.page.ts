import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-center',
  templateUrl: './center.page.html',
  styleUrls: ['./center.page.scss'],
})
export class CenterPage implements OnInit {
  public id!: number;
  public stateId!: number;
  public muniId!: number;
  public parrishId!: number;
  private activatedRoute = inject(ActivatedRoute);
  centerData: any;
  graphicData: number[] = [];
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id') as unknown as number;
    this.parrishId = this.activatedRoute.snapshot.paramMap.get('parrishId') as unknown as number;
    this.stateId = this.activatedRoute.snapshot.paramMap.get('stateId') as unknown as number;
    this.muniId = this.activatedRoute.snapshot.paramMap.get('muniId') as unknown as number;
    this.centerData = this.dataService.getCenter(this.stateId, this.muniId, this.parrishId, this.id);
    console.log(this.centerData)
    this.graphicData = [this.centerData.totals.eg, this.centerData.totals.nm, this.centerData.totals.others]
  }
  goToTable(id: any) {
    this.router.navigate(['table', this.stateId, this.muniId, this.parrishId, this.id, id]);
  }
}
