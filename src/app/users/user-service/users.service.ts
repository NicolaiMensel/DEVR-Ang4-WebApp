import { Injectable } from '@angular/core';
import {User} from "../user";
import {Router} from "@angular/router";
import {AngularFire} from "angularfire2";
import {Observable} from "rxjs";

@Injectable()
export class UsersService {

  constructor(private router: Router, private af : AngularFire) {
  }

  getUsers(){
   return this.af.database.list('/users');
  }

  getUser(id: string) : Observable<User>{
    return this.af.database.object('users/' + id);
  }

  addUser(user: User){
    this.af.database.list('/users').push(user).key;
  }

  deleteUser(user: User){
    this.af.database.list('/users').remove(user.$key);
  }

  updateUser(user: User){
    this.af.database.list('/users').update(user.$key, user);
  }
}

