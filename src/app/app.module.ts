import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {NgApexchartsModule} from "ng-apexcharts";
import {provideHttpClient} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [BrowserModule, IonicModule.forRoot({
    innerHTMLTemplatesEnabled: true
  }), AppRoutingModule, NgApexchartsModule],
  providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    provideHttpClient()],
  bootstrap: [AppComponent],

})
export class AppModule {}
