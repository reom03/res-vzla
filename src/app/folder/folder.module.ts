import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FolderPageRoutingModule } from './folder-routing.module';
import { FolderPage } from './folder.page';
import {NgApexchartsModule} from "ng-apexcharts";
import {AppModule} from "../app.module";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
    NgOptimizedImage,
    SharedModule
  ],
  declarations: [FolderPage]
})
export class FolderPageModule {}
