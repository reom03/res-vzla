import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CenterPageRoutingModule } from './center-routing.module';

import { CenterPage } from './center.page';
import {SharedModule} from "../shared/shared.module";
import {CentersPipe} from "../services/centers.pipe";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CenterPageRoutingModule,
        SharedModule,
        CentersPipe
    ],
  declarations: [CenterPage]
})
export class CenterPageModule {}
