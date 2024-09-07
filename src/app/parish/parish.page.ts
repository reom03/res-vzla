import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-parish',
  templateUrl: './parish.page.html',
  styleUrls: ['./parish.page.scss'],
})
export class ParishPage implements OnInit {

  public id!: number;
  public stateId!: number;
  public muniId!: number;
  private activatedRoute = inject(ActivatedRoute);
  parrishData: any;
  graphicData: number[] = [];
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id') as unknown as number;
    this.stateId = this.activatedRoute.snapshot.paramMap.get('stateId') as unknown as number;
    this.muniId = this.activatedRoute.snapshot.paramMap.get('muniId') as unknown as number;
    this.parrishData = this.dataService.getParrish(this.stateId, this.muniId, this.id);
    console.log(this.parrishData)
    this.graphicData = [this.parrishData.totals.eg, this.parrishData.totals.nm, this.parrishData.totals.others]
  }

  goToCenter(id: any) {
    this.router.navigate(['center', this.stateId, this.muniId, this.id, id]);
  }

}
