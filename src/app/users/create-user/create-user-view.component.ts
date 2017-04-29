import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {User} from '../user';
@Component({
  selector: 'mrr-create-user-view',
  templateUrl: 'create-user-view.component.html',
  styleUrls: ['create-user-view.component.css']
})
export class CreateUserViewComponent implements OnInit {

  newUser: User;

  @Output('register')
  tryRegisterEmitter = new EventEmitter();


  constructor() {
    this.newUser = new User();
  }

  tryRegister(){
    this.tryRegisterEmitter.emit(this.newUser);
  }

  ngOnInit() {
  }

  registerUser()
  {

  }

}
