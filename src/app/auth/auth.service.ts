import { Injectable } from '@angular/core';
import {User} from "../users/user";
import {UsersService} from "../users/user-service/users.service";
import {Observable} from "rxjs";
import {AngularFire, FirebaseAuthState} from "angularfire2";
@Injectable()
export class AuthService {

  constructor(private af : AngularFire) {
  }

  login(email, password) : Observable<FirebaseAuthState>{
    let promise = <Promise<FirebaseAuthState>> this.af.auth.login({
      email: email,
      password: password
    });
    return Observable.fromPromise(promise);
  }

  currentUser() : Observable<FirebaseAuthState>{
    return this.af.auth;
  }

  logout() : Observable<void>{
    let promise = this.af.auth.logout();
    return Observable.fromPromise(promise);
  }
}
