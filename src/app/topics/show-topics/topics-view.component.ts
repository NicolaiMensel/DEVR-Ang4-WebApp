import {Component, Input, OnInit} from '@angular/core';
import {Topic} from "../topic";

@Component({
  selector: 'app-topics-view',
  templateUrl: './topics-view.component.html',
  styleUrls: ['./topics-view.component.css']
})
export class TopicsViewComponent implements OnInit {

  @Input()
  topics: Array<Topic>

  constructor() { }

  ngOnInit() {
    if (!this.topics) {
      this.topics = new Array<Topic>();
    }
  }
}
