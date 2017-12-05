import { Component } from '@angular/core';
import { NavController, ViewController ,LoadingController,AlertController,ToastController,ModalController} from 'ionic-angular';
import { SigninPage } from '../signin/signin';
import { SignupPage } from '../signup/signup';
import { CommonProvider } from '../../providers/common/common';
import { SharedProvider } from '../../providers/shared/shared';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
profilepicface:any;
  constructor(
       public navCtrl: NavController, 
      public viewCtrl: ViewController, 
      public modalCtrl: ModalController,
      public shared: SharedProvider,
      private http: Http, 
      public Cmn: CommonProvider,
      public loadingCtrl: LoadingController,
      private alertCtrl: AlertController,
      private toastCtrl: ToastController,
      private googlePlus: GooglePlus,
      private fb: Facebook
      ) {

  }
  openSigninPage() {
    let modal = this.modalCtrl.create(SigninPage);
    modal.present();
  }
  presentModal() {
    let modal = this.modalCtrl.create(SignupPage);
    modal.present();
  }
  loginUser()
  {
      alert("bhumi")
    alert('fgdhfgdh');
    this.googlePlus.login({
  // 'webClientId': '566433833064-lr60t74t0t8ss6melirlue4bc32sgm05.apps.googleusercontent.com',
 //  'offline': true
    }).then(res => {
    console.log(res);
      alert(JSON.stringify(res));
      alert('isha');
        alert('isha');
    alert(JSON.stringify(res.givenName));
    alert(JSON.stringify(res.idToken));


}, error => {
 console.log(JSON.stringify(error));
      alert('error');
      alert(JSON.stringify(error));

    });
 }
 
 
 /////////////////////facebook/////////////////////
 
 
 facebook_login() {
     alert("facebook")
    this.fb.login(['public_profile', 'user_friends', 'email'])
      .then((res: FacebookLoginResponse) => {
         alert(JSON.stringify(res))
        this.fb.api('me/?fields=id,email,last_name,first_name', ["public_profile", "email"])
          .then((result) => {
              console.log(result);
              console.log(result.id);
            alert(result.id);
            this.profilepicface = "https://graph.facebook.com/" + result.id + "/picture?type=large"
            console.log(this.profilepicface);
//             var url: string = this.shared.baseUrl + "this.variable.SIGNIN_API";
//             var signindata = {
//              full_name: result.first_name,
//              email: result.email,
//              image:this.profilepicface,
//              facebook_id:result.id
//            }
//            
//            var serialized_data = this.Cmn.serializeObj(signindata);
//            console.log(serialized_data)
//
//            let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
//            let options = new RequestOptions({ headers: headers });
//            this.http.post(url, serialized_data, options)
//              .map(res => res.json())
//              .subscribe(resolve => {
//                console.log(resolve);
//              })
          
          }).catch(d => {
            alert(JSON.stringify(d))
          alert(JSON.stringify(d))
          })
        })
      .catch(e => {
        alert("grover"+e)
      alert(JSON.stringify(e))
        
     
      });
      
        }
}
