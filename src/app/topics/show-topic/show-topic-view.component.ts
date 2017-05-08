import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Topic} from "../topic";
import {Content} from "../content";
import {Debug} from "ng2-img-cropper/src/exif";

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

  hideme: {};
  newComment : Topic;
  subComment : Topic;

  constructor() {

  }

  ngOnInit() {
    this.initTopicTemplates()
    this.hideme = {};
    this.hideme[this.topic.id] = true;
    for (let element of this.topic.subTopics) {
      this.hideme[element.id] = true;
    }
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
    comment.subTopics = [];
    comment.id = Math.floor(Math.random()) + comment.timeStamp.toString();
    parentTopic.subTopics.push(comment);

    this.initTopicTemplates();
    console.log(comment.content.message);
    this.hideme[parentTopic.id] = true;

  }

  initTopicTemplates(){
    this.newComment = new Topic()
    this.newComment.content = new Content();
    this.subComment = new Topic();
    this.subComment.content = new Content();
  }

  onClick(item) {
    this.subComment.content.message = "";
    var hidden = this.hideme[item.id];
    Object.keys(this.hideme).forEach(h => {
      this.hideme[h] = true;
    });
    this.hideme[item.id] = !hidden;
    for (let something in this.hideme) {
      console.log(something);
      console.log(this.hideme[something]);
    }
  }

}
