import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import {User} from "../../users/user";

@Component({
  selector: 'mrr-login-view',
  templateUrl: 'login-view.component.html',
  styleUrls: ['login-view.component.css']
})
export class LoginViewComponent implements OnInit {

  @Input()
  user : any;

  @Input()
  signInError : string;

  @Input()
  tryingToLogIn: boolean;

  @Output('login')
  tryLoginEmitter = new EventEmitter();

  tryLogin(){
    this.tryLoginEmitter.emit(this.user);
  }
  constructor() {
    this.user = new User();
  }

  ngOnInit() {
  }

}
