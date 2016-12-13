import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { TimeRoutingModule } from './time.routing';
import { TimeComponent } from './time.component';
import { TimeDetailComponent } from './time.detail.component';
import { NewTimeComponent } from './newtime.component';
import { TimeService } from './time.service';

@NgModule({
  imports: [SharedModule, FormsModule, TimeRoutingModule],
  declarations: [TimeComponent, NewTimeComponent, TimeDetailComponent],
  providers: [TimeService]
})
export class TimeModule { }
