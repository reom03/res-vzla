import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatePageRoutingModule } from './state-routing.module';

import { StatePage } from './state.page';
import {SharedModule} from "../shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        StatePageRoutingModule,
        SharedModule
    ],
  declarations: [StatePage]
})
export class StatePageModule {}
