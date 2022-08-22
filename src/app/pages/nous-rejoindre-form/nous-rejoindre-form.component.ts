import { Component, OnInit, Input } from '@angular/core';
import {Router} from "@angular/router"
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nous-rejoindre-form',
  templateUrl: './nous-rejoindre-form.component.html',
  styleUrls: ['./nous-rejoindre-form.component.scss']
})

export class NousRejoindreFormComponent implements OnInit {

  @Input() id: number;
  public router: Router;

  constructor(router: Router, route: ActivatedRoute) {
    this.id = this.getRouteId(route);
    this.router = router;
  }


  getRouteId(route: ActivatedRoute) {

    let id = route.snapshot.paramMap.get('id');

    if (id == null) {
      return 0;
    }

    return parseInt(id);
    
  }

  ngOnInit(): void {
    if(
      this.id < 1 ||
      this.id > 3
    ) {
      this.router.navigate(['/nous-rejoindre'])
    }
  }

}
