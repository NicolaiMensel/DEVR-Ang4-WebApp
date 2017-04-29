import {Component, OnInit, Input} from '@angular/core';
import {User} from "../users/user";
import {AuthService} from "../auth/auth.service";
import {MdSnackBar} from "@angular/material";
import {Router} from "@angular/router";
import {FirebaseAuthState} from "angularfire2";

@Component({
  selector: 'mrr-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Input()
  title : string;

  user: FirebaseAuthState;

  constructor(private authService: AuthService, public loginValidationBar: MdSnackBar, private router: Router)
  {
  }

  logout()
  {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['login']).then(() => {
        this.loginValidationBar.open("You are logged out", "Ok", {
          duration: 3000,
        });
      });
    });
  }

  ngOnInit() {
    this.authService.currentUser().subscribe(user => {
      this.user = user;
    })
  }

}
