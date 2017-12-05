import { Component } from '@angular/core';
import { NavController, ModalController  } from 'ionic-angular';
import { SettingPage } from '../setting/setting';

@Component({
  selector: 'page-myprofile',
  templateUrl: 'myprofile.html'
})
export class MyprofilePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }
  opensettingpage(){
	  this.navCtrl.push(SettingPage)
  }
  
}
