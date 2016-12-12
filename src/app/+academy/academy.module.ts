import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcademyRoutingModule } from './academy.routing';
import { AcademyComponent } from './academy.component';
import { AcademyDetailComponent } from './academy.detail.component';
import { AcademyService } from './academy.service';

@NgModule({
  imports: [CommonModule, AcademyRoutingModule],
  declarations: [AcademyComponent, AcademyDetailComponent],
  providers: [AcademyService]
})
export class AcademyModule { }
