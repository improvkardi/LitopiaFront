import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-a-propos',
  templateUrl: './a-propos.component.html',
  styleUrls: ['./a-propos.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class AProposComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
