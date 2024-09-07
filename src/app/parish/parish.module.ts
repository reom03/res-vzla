import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParishPageRoutingModule } from './parish-routing.module';

import { ParishPage } from './parish.page';
import {SharedModule} from "../shared/shared.module";
import {CentersPipe} from "../services/centers.pipe";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ParishPageRoutingModule,
        SharedModule,
        CentersPipe
    ],
  declarations: [ParishPage]
})
export class ParishPageModule {}
