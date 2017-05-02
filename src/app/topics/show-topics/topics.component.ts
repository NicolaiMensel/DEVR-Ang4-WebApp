import { Component, OnInit } from '@angular/core';
import {Topic, Type} from "../topic";
import {Timestamp} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'mrr-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

  topics : Array<Topic>

  constructor(private router : Router) {
  }

  ngOnInit() {
    this.createTopics();
  }

  createTopics() {
    this.topics = [
      {title:'Forum has been created!!', timeStamp: new Date().toString(), type : Type.News, user: {name:'SirKalrin[Admin]', age:69, email:'SirKalrin.Supp@DExplorer.VR', password:'admin'},
        content : {message : "Greetings players and followers! It's now possible to use the forum to follow news, post about issues, or general discussions. Have fun and be constructive!"}, subTopics: []},
      {title:'Do you like the game concept?', timeStamp: new Date().toString(), type : Type.General, user: {name:'SirMensel[Admin]', age:69, email:'SirMensel.Supp@DExplorer.VR', password:'admin'},
        content : {message : "We'd like to hear if you have any ideas to our game, and if there is anything horrible!!"}, subTopics: []},
      {title:'I cannot download the game!!', timeStamp: new Date().toString(), type : Type.Support, user: {name:'Tim Andersen', age:12, email:'Tima@gmail.com', password:'1234'},
        content : {message : "I cannot locate the game on Google Play Store.. what to do?!?!"}, subTopics: []}
        ];
  }

  showTopic(id : string)
  {
    this.router.navigate(["/topics/" + id]);
  }
}
