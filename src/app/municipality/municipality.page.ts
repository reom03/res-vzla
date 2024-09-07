import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-municipality',
  templateUrl: './municipality.page.html',
  styleUrls: ['./municipality.page.scss'],
})
export class MunicipalityPage implements OnInit {
  public id!: number;
  public stateId!: number;
  private activatedRoute = inject(ActivatedRoute);
  muniData: any;
  graphicData: number[] = [];
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id') as unknown as number;
    this.stateId = this.activatedRoute.snapshot.paramMap.get('stateId') as unknown as number;
    this.muniData = this.dataService.getMunicipality(this.stateId, this.id);
    console.log(this.muniData)
    this.graphicData = [this.muniData.totals.eg, this.muniData.totals.nm, this.muniData.totals.others]
  }

  goToParish(id: any) {
    this.router.navigate(['parrish', this.stateId, this.id, id]);
  }
}
