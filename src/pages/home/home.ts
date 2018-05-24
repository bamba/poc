import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ContributionsPage} from '../contributions/contributions';
import { GlobalProvider } from "../../providers/GlobalProvider";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public global: GlobalProvider) {
    this.navCtrl=navCtrl;
    this.global=global;
  }

  navigate() 
  {
    this.navCtrl.setRoot(ContributionsPage);
    this.global.LoggedIn = true;
  }
}
