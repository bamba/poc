import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FraudManagementPage } from './fraud-management';

@NgModule({
  declarations: [
    FraudManagementPage,
  ],
  imports: [
    IonicPageModule.forChild(FraudManagementPage),
  ],
})
export class FraudManagementPageModule {}
