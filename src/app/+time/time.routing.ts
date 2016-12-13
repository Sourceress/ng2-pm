import { RouterModule } from '@angular/router';

import { TimeComponent } from './time.component';
import { NewTimeComponent } from './newtime.component';
import { TimeDetailComponent } from './time.detail.component';

export const TimeRoutingModule = RouterModule.forChild([
  { path: 'time', component: TimeComponent },
  { path: 'newtime', component: NewTimeComponent },
  { path: 'time/:id', component: TimeDetailComponent }
]);
