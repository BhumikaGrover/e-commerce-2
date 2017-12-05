import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChangepasswordPage } from '../changepassword/changepassword';

@Component({
  selector: 'page-change_email',
  templateUrl: 'change_email.html'
})
export class Change_emailPage {

  constructor(public navCtrl: NavController) {

  }
	openchangepassword(){
		this.navCtrl.push(ChangepasswordPage)
	}
}
