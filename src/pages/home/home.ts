import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ProfilePage} from '../profiles/profile'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    this.navCtrl=navCtrl;
  }

  navigate()
  {
    this.navCtrl.push(ProfilePage)

  }
}
