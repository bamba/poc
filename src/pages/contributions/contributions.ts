import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ContributionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contributions',
  templateUrl: 'contributions.html',
})
export class ContributionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  DateFrom : String ="";
  DateFromValue: Date = new Date();
  DateTo: String = new Date().toLocaleDateString();

  ionViewDidLoad() {

    this.DateFromValue.setFullYear(2009,12,1);

    this.DateFrom = this.DateFromValue.toLocaleDateString();

    console.log('ionViewDidLoad ContributionsPage');
  }

}
