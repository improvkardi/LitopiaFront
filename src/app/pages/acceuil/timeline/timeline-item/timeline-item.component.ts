import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-timeline-item',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.scss','./timeline-item.theme.component.scss']
})
export class TimelineItemComponent implements OnInit {
  @Input() title!:string;
  @Input() displayDate!:string;
  @Input() datetime!:string;
  @Input() description!:string;
  @Input() image!:string;
  @Input() align!:'left'|'right'

  constructor() { }

  ngOnInit(): void {
  }

}
