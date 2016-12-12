import { RouterModule } from '@angular/router';

import { AcademyComponent } from './academy.component';
import { AcademyDetailComponent } from './academy.detail.component';

export const AcademyRoutingModule = RouterModule.forChild([
  { path: 'academy', component: AcademyComponent },
  { path: 'academy/:id', component: AcademyDetailComponent }
]);
