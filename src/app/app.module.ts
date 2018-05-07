import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { ContributionsPage } from '../pages/contributions/contributions';
import { StaffPerformancePage } from '../pages/staff-performance/staff-performance';
import { AdministrationPage } from '../pages/administration/administration';
import { CorrespondencePage } from '../pages/correspondence/correspondence';
import { FormsPage } from '../pages/forms/forms';
import { PaymentsPage } from '../pages/payments/payments';
import { FraudManagementPage } from '../pages/fraud-management/fraud-management';
import { AnalyticsPage } from '../pages/analytics/analytics';
import { MyAccountPage } from '../pages/my-account/my-account';
import { LogOutPage } from '../pages/log-out/log-out';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ContributionsPage,
    StaffPerformancePage,
    AdministrationPage,
    CorrespondencePage,
    FormsPage,
    PaymentsPage,
    FraudManagementPage,
    AnalyticsPage,
    MyAccountPage,
    LogOutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ContributionsPage,
    StaffPerformancePage,
    AdministrationPage,
    CorrespondencePage,
    FormsPage,
    PaymentsPage,
    FraudManagementPage,
    AnalyticsPage,
    MyAccountPage,
    LogOutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
