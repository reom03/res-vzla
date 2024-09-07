import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GraphicComponent} from "./graphic/graphic.component";
import {NgApexchartsModule} from "ng-apexcharts";
import {HeaderComponent} from "./header/header.component";
import {IonicModule} from "@ionic/angular";
import {TotalsComponent} from "./totals/totals.component";



@NgModule({
  declarations: [
    GraphicComponent,
    HeaderComponent,
    TotalsComponent
  ],
  imports: [
    CommonModule,
    NgApexchartsModule,
    IonicModule
  ],
  exports:[
    GraphicComponent,
    HeaderComponent,
    TotalsComponent
  ]
})
export class SharedModule { }
