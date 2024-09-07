import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MunicipalityPageRoutingModule } from './municipality-routing.module';

import { MunicipalityPage } from './municipality.page';
import {SharedModule} from "../shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MunicipalityPageRoutingModule,
        SharedModule
    ],
  declarations: [MunicipalityPage]
})
export class MunicipalityPageModule {}
