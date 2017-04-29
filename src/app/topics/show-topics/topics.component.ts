import { Component, OnInit } from '@angular/core';
import {Topic} from "../topic";

@Component({
  selector: 'mrr-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

  topics : Array<Topic>

  constructor() {
  }

  ngOnInit() {
    this.topics = [
      {id:'alshdfkjgsdfas', title:'Error 404', image:'assets/images/aarhus-havn.jpg', message:'Much bug less fix.. need halp bujdha bjlkdaujkeu eakeku klaelk euae byeh bkjadjhfjh',
    timeStamp: '2017-25-21', user: {$key:'awedf', name:'lars', age:21, email:'ajkhbsef@hluakgfdsj.com', password:'1234'}},
      {id:'alshdfkjgsdfas', title:'Error 404', image:'assets/images/aarhus-havn.jpg', message:'Much bug less fix.. need halp bujdha bjlkdaujkeu eakeku klaelk euae byeh bkjadjhfjh',
        timeStamp: '2017-25-21', user: {$key:'awedf', name:'lars', age:21, email:'ajkhbsef@hluakgfdsj.com', password:'1234'}},
      {id:'alshdfkjgsdfas', title:'Error 404', image:'assets/images/aarhus-havn.jpg', message:'Much bug less fix.. need halp bujdha bjlkdaujkeu eakeku klaelk euae byeh bkjadjhfjh',
        timeStamp: '2017-25-21', user: {$key:'awedf', name:'lars', age:21, email:'ajkhbsef@hluakgfdsj.com', password:'1234'}}

    ];
  }

  SubmitReview()
  {
  }
}
