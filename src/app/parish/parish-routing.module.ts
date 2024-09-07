import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParishPage } from './parish.page';

const routes: Routes = [
  {
    path: '',
    component: ParishPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParishPageRoutingModule {}
