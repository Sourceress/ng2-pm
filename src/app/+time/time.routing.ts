import { RouterModule } from '@angular/router';

import { TimeComponent } from './time.component';
import { NewTimeComponent } from './newtime.component';

export const TimeRoutingModule = RouterModule.forChild([
  { path: 'time', component: TimeComponent },
  { path: 'newtime', component: NewTimeComponent }
]);
