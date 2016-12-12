import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { TimeRoutingModule } from './time.routing';
import { TimeComponent } from './time.component';
import { NewTimeComponent } from './newtime.component';
import { TimeService } from './time.service';

@NgModule({
  imports: [SharedModule, FormsModule, TimeRoutingModule],
  declarations: [TimeComponent, NewTimeComponent],
  providers: [TimeService]
})
export class TimeModule { }
