import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StaffPerformancePage } from './staff-performance';

@NgModule({
  declarations: [
    StaffPerformancePage,
  ],
  imports: [
    IonicPageModule.forChild(StaffPerformancePage),
  ],
})
export class StaffPerformancePageModule {
  title: string = "Staff Performance";
}
