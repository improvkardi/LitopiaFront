import { Component, OnInit } from '@angular/core';

import {articles} from "./season.data"

export interface TimelineArticle {
  title:string;
  displayDate:string;
  datetime:string;
  description:string;
  image:string;
}

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  articles : TimelineArticle[] = articles;

  constructor() {
    console.log(articles)
  }

  ngOnInit(): void {
  }

}
