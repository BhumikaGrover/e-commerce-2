import { Component } from '@angular/core';
import {  NavController, ViewController ,LoadingController,AlertController,ToastController,ModalController } from 'ionic-angular';
import { CommonProvider } from '../../providers/common/common';
import { SharedProvider } from '../../providers/shared/shared';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
@Component({
  selector: 'page-changepassword',
  templateUrl: 'changepassword.html'
})
export class ChangepasswordPage {
    user_id:any;
 public data = {
    old: "",
    new: "",
    cpnew: ""

  };
  constructor(public navCtrl: NavController, 
      public viewCtrl: ViewController, 
      public modalCtrl: ModalController,
      public shared: SharedProvider,
      private http: Http, 
      public Cmn: CommonProvider,
      public loadingCtrl: LoadingController,
      private alertCtrl: AlertController,
      private toastCtrl: ToastController,) {
this.user_id = localStorage.getItem('userid');
  }

}
