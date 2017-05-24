import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Topic} from "../topic";
import {Content} from "../content";
import {Debug} from "ng2-img-cropper/src/exif";
import {User} from "../../users/user";
import {DomSanitizer} from "@angular/platform-browser";
import {TopicService} from "../topic.service";

@Component({
  selector: 'app-show-topic-view',
  templateUrl: './show-topic-view.component.html',
  styleUrls: ['./show-topic-view.component.css']
})
export class ShowTopicViewComponent implements OnInit {

  @Input()
  topic : Topic;
  url : any;

  @Output()
  tryAddCommentEmitter = new EventEmitter();

  hideme: {};
  newComment : Topic;
  subComment : Topic;

  constructor() {

  }

  ngOnInit() {
    this.initTopicTemplates();
    // this.url = this.sanitizer.bypassSecurityTrustUrl(this.topic.user.picture);
    if(this.topic != null) {
      Debug.log("IT RUUUUUUUUUUNS");
      this.hideme = {};
      this.hideme[this.topic.id] = true;
      for (let element of this.topic.subTopics) {
        this.hideme[element.id] = true;
      }
    }
  }

  tryAddComment(comment : Topic, parentTopic : Topic) {
    console.log("yasss");
    this.tryAddCommentEmitter.emit(comment);
    this.initTopicTemplates();
    this.hideme[parentTopic.id] = true;
  }

  getDateAsString(timeStamp : string){
    var date = new Date(timeStamp);
    return date.toLocaleDateString() + " " + date.toLocaleTimeString();
  }

  // addComment(comment : Topic, parentTopic : Topic)
  // {
    //comment.parent = parentTopic;
    //comment.title = "Re: " + comment.parent.title;
    // comment.timeStamp = new Date().toString();
    // //TO DOO
    // comment.user = parentTopic.user;
    // comment.subTopics = [];
    // comment.id = Math.floor(Math.random()) + comment.timeStamp.toString();
    // parentTopic.subTopics.push(comment);


  //   this.initTopicTemplates();
  //   //console.log(comment.content.message);
  //   this.hideme[parentTopic.id] = true;
  //
  // }

  initTopicTemplates(){
     this.topic = new Topic();
     this.topic.subTopics = [];
     this.topic.user = new User();
     this.newComment = new Topic();
     this.newComment.subTopics = [];
     this.newComment.user = new User();
    //this.newComment.content = new Content();
    this.subComment = new Topic();
    this.subComment.user = new User();
    //this.subComment.content = new Content();
  }

  onClick(item) {
    //this.subComment.content.message = "";
    this.subComment.message = "";
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
