import { RouterModule } from '@angular/router';

import { StatisticsComponent } from './statistics.component';

export const StatisticsRoutingModule = RouterModule.forChild([
  { path: 'statistics', component: StatisticsComponent },
]);
