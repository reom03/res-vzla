import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-state',
  templateUrl: './state.page.html',
  styleUrls: ['./state.page.scss'],
})
export class StatePage implements OnInit {
  public id!: number;
  private activatedRoute = inject(ActivatedRoute);
  stateData: any;
  graphicData: number[] = [];
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id') as unknown as number;
    this.stateData = this.dataService.findStateInfo(this.id);
    this.graphicData = [this.stateData.totals.eg, this.stateData.totals.nm, this.stateData.totals.others]
  }
  goToMuni(id: number) {
    this.router.navigate(['municipality', this.stateData.id, id])
  }
}
