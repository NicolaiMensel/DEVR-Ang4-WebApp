import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Topic} from "../topic";
import {Content} from "../content";

@Component({
  selector: 'app-show-topic-view',
  templateUrl: './show-topic-view.component.html',
  styleUrls: ['./show-topic-view.component.css']
})
export class ShowTopicViewComponent implements OnInit {

  @Input()
  topic : Topic;

  newComment : Topic;
  subComment : Topic;

  @Output()
  tryAddCommentEmitter = new EventEmitter();

  constructor() {

  }

  ngOnInit() {
    this.initTopicTemplates()
  }

  getDateAsString(timeStamp : string){
    var date = new Date(timeStamp);
    return date.toLocaleDateString() + " " + date.toLocaleTimeString();
  }

  addComment(comment : Topic, parentTopic : Topic)
  {
    comment.parent = parentTopic;
    comment.title = "Re: " + comment.parent.title;
    comment.timeStamp = new Date().toString();
    //TO DOO
    comment.user = parentTopic.user;
    parentTopic.subTopics.push(comment);
    this.initTopicTemplates();
  }

  initTopicTemplates(){
    this.newComment = new Topic()
    this.newComment.content = new Content();
    this.subComment = new Topic();
    this.subComment.content = new Content();
  }

}
