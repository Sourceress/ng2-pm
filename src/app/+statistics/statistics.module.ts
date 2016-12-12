import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { StatisticsRoutingModule } from './statistics.routing';
import { StatisticsComponent } from './statistics.component';
import { StatisticsByProjectComponent } from './statistics.byProject.component';
import { StatisticsByDateComponent } from './statistics.byDate.component';
import { StatisticsService } from './statistics.service';
import { WorktimeDirective } from './worktime.directive';

@NgModule({
  imports: [SharedModule, StatisticsRoutingModule],
  declarations: [StatisticsComponent, StatisticsByProjectComponent, StatisticsByDateComponent, WorktimeDirective],
  providers: [StatisticsService]
})
export class StatisticsModule { }
