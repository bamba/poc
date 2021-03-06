import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Title } from '@angular/platform-browser';

/**
 * Generated class for the StaffPerformancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-staff-performance',
  templateUrl: 'staff-performance.html', 
})
export class StaffPerformancePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
 
  title: string = "Staff Performance";
  applicationDate: Date = new Date();
  ionViewDidLoad() {
    console.log('ionViewDidLoad StaffPerformancePage');
  }

}
