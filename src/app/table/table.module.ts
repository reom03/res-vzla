import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TablePageRoutingModule } from './table-routing.module';

import { TablePage } from './table.page';
import {SharedModule} from "../shared/shared.module";
import {CandidatePipe} from "../services/candidate.pipe";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TablePageRoutingModule,
        SharedModule,
        CandidatePipe
    ],
  declarations: [TablePage]
})
export class TablePageModule {}
