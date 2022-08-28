import { Component, OnInit } from '@angular/core';
import {SeoService} from "../../utils/seo.service";

@Component({
  selector: 'app-reglement',
  templateUrl: './reglement.component.html',
  styleUrls: ['./reglement.component.scss',"./reglement.theme.component.scss"]
})
export class ReglementComponent implements OnInit {

  constructor(private seo:SeoService) {
    this.seo.generateTags({
      title: 'Litopia - Nous rejoindre reglement',
      description: 'venez rejoindre le server de litopia youpi',
      //image: 'https://litopia.fr/uneimageàmettre'
    });
  }

  ngOnInit(): void {
  }

}
