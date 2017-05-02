import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Topic} from "../topic";

@Component({
  selector: 'app-show-topic-view',
  templateUrl: './show-topic-view.component.html',
  styleUrls: ['./show-topic-view.component.css']
})
export class ShowTopicViewComponent implements OnInit {

  @Input()
  topic : Topic;

  @Output()
  tryAddCommentEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  getDateAsString(timeStamp : string){
    var date = new Date(timeStamp);
    return date.toLocaleDateString() + " " + date.toLocaleTimeString();
  }

}
