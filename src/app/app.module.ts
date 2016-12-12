import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

import { StatisticsModule } from './+statistics/statistics.module';
import { TimeModule } from './+time/time.module';
import { AcademyModule } from './+academy/academy.module';

import { ENV_PROVIDERS } from '../environments/environment';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    StatisticsModule,
    TimeModule,
    AcademyModule
  ],
  declarations: [AppComponent],
  providers: [ENV_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
