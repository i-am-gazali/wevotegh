import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from 'angular2-jwt';
/*
  Generated class for the Authservice provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
// @Injectable()
export class AuthService {

  constructor() {
    console.log('Hello Authservice Provider');
  }
  public  authenticated() {
    return tokenNotExpired();
  }
}
