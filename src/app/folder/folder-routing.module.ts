import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';
import {NgApexchartsModule} from "ng-apexcharts";

const routes: Routes = [
  {
    path: '',
    component: FolderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), NgApexchartsModule],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
