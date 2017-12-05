import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams ,ModalController} from 'ionic-angular';
import { Change_emailPage } from '../change_email/change_email';
import { Shipping_addressPage } from '../shipping_address/shipping_address';
import { PaymentPage } from '../payment/payment';

/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor(public navCtrl: NavController,public viewCtrl: ViewController, public navParams: NavParams) {
  }

   dismiss() {
         let data = { 'foo': 'bar' };
   this.viewCtrl.dismiss(data);
    }
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }
  openemailpage(){
	  this.navCtrl.push(Change_emailPage)
  }
  open_shippingpage(){
	  this.navCtrl.push(Shipping_addressPage)
  }
  openpayment_page(){
	  this.navCtrl.push(PaymentPage)
  }

}
