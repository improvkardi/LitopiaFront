import { Component, OnInit, Input } from '@angular/core';
import {Route, Router} from "@angular/router"
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nous-rejoindre-form',
  templateUrl: './nous-rejoindre-form.component.html',
  styleUrls: ['./nous-rejoindre-form.component.scss','./nous-rejoindre-form.component.theme.scss'],
})

export class NousRejoindreFormComponent implements OnInit {

  @Input() id: number;
  public router: Router;
  public route: ActivatedRoute;

  constructor(router: Router, route: ActivatedRoute) { 
    this.id = 0;
    this.route = route;
    this.router = router;
  }


  getRouteId(route: ActivatedRoute) {

    let id = route.snapshot.paramMap.get('id');

    if (id == null) {
      return 0;
    }

    return parseInt(id);
    
  }

  checkRouteId() {
    if(
      this.id < 1 ||
      this.id > 3
    ) {
      this.router.navigate(['/nous-rejoindre'])
    }
  }

  ngOnInit(): void {
    this.id = this.getRouteId(this.route);
    this.checkRouteId()
  }

  updateRoute(id: number): void {
    this.id = id;
    this.checkRouteId();
  }

}
