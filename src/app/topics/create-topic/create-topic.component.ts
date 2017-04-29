import { Component, OnInit } from '@angular/core';
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-create-topic',
  templateUrl: './create-topic.component.html',
  styleUrls: ['./create-topic.component.css']
})
export class CreateTopicComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  createForum(topic)
  {
    //this.userService.addUser(user);
    this.router.navigate(["users"]);
  }

}
