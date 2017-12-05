import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SharedProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SharedProvider {

  constructor(public http: HttpClient) {
    console.log('Hello SharedProvider Provider');
  }
public baseUrl: string="http://ecommerce-env.us-east-2.elasticbeanstalk.com/";

///////Api////////////
public SIGNUP= "api/users";
public SIGNIN= "api/users/login";
public FORGOT= "api/forgetpass";
}
