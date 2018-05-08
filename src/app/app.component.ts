import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any,icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Login', component: HomePage,  icon: 'key'},
      //{ title: 'List', component: ListPage },
      { title: 'Administration', component: AdministrationPage,  icon: 'navigate'},
      { title: 'Contributions', component: ContributionsPage,  icon: 'cash' },
      { title: 'Staff Performance', component: StaffPerformancePage,  icon: 'pulse' },
      { title: 'Correspondence', component: CorrespondencePage,  icon: 'mail' },
      { title: 'Forms', component: FormsPage,  icon: 'list' },
      { title: 'Payments', component: PaymentsPage ,  icon: 'card'},
      { title: 'Fraud Management', component: FraudManagementPage,  icon: 'cash' },
      { title: 'Analytics', component: AnalyticsPage,  icon: 'options' },
      { title: 'My Account', component: MyAccountPage ,  icon: 'person'},
      { title: 'Log Out', component: LogOutPage ,  icon: 'exit'}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
