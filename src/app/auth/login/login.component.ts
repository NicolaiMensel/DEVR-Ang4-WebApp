import {Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import {MdSnackBar} from '@angular/material';
import {AuthService} from "../auth.service";
import {Subscription} from "rxjs";


@Component({
  selector: 'mrr-login',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {


  loginError: string;
  request: Subscription;
  tryingToLogin: boolean;

  constructor(public loginValidationBar: MdSnackBar, private router : Router, private authService: AuthService) {

  }

  login(user){
    this.tryingToLogin = true;
    if(this.request)
    {
      this.request.unsubscribe();
    }
    this.request = this.authService
      .login(user.email, user.password)
      .subscribe((lUser) => {
        if(lUser.length > 0)
        {
          this.loginError=null;
          this.router.navigate(['/']).then(() => {
            this.loginValidationBar.open("You are logged in", "Ok")
          });
        }
        else {
          this.loginError = 'not correct email or password';
        }
        this.tryingToLogin = false;
      });

  }

  ngOnInit() {
  }
}
