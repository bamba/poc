import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CorrespondencePage } from './correspondence';

@NgModule({
  declarations: [
    CorrespondencePage,
  ],
  imports: [
    IonicPageModule.forChild(CorrespondencePage),
  ],
})
export class CorrespondencePageModule {}
