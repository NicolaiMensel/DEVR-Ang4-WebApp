import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UsersService} from "../user-service/users.service";

@Component({
  selector: 'mrr-create-user',
  templateUrl: 'create-user.component.html',
  styleUrls: ['create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(private router : Router, private userService: UsersService) { }

  ngOnInit() {
  }

  register(user)
  {
    this.userService.addUser(user);
    this.router.navigate(["users"]);
  }

}
