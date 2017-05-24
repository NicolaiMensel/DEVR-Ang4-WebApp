import { Component, OnInit } from '@angular/core';
import {Topic, TopicTypes} from "../topic";
import {ActivatedRoute, Router} from "@angular/router";
import {TopicService} from "../topic.service";
import {forEach} from "@angular/router/src/utils/collection";
import {UsersService} from "../../users/user-service/users.service";
import {User} from "../../users/user";
import {Debug} from "ng2-img-cropper/src/exif";
import {log} from "util";

@Component({
  selector: 'app-show-topic',
  templateUrl: './show-topic.component.html',
  styleUrls: ['./show-topic.component.css']
})
export class ShowTopicComponent implements OnInit {

  topic : Topic;

  constructor(private route : ActivatedRoute, private topicService : TopicService, private userService : UsersService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.topicService.getTopic(params['id']).subscribe(topic => this.topic = this.getTopicData(topic));
    });
  }

  getTopicData(t : Topic)
  {
    let subTopics : Topic[];
    subTopics = [];

    for (let i = 0; i < t.subTopics.length; i++)
    {
      this.topicService.getTopic(t.subTopics[i]).subscribe(topic => {topic = this.addSubTopics(topic), subTopics.push(topic)});
    }
     t.subTopics = subTopics;
    console.log(t.subTopics.length)
    return t;
  }

  private addSubTopics(topic : Topic) {

    let subComments = [];

    console.log("penis : ");
    for(let subTopic of topic.subTopics)
    {
      console.log(subTopic);
      this.topicService.getTopic(subTopic).subscribe(topic => {subComments.push(topic)});
    }
    topic.subTopics = subComments;
    return topic;
  }

  addComment(topic : Topic)
  {
    console.log("MORT DO MORE AWESOME STUFF HERE!!!!" + topic)

  }
}
