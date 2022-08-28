import { Component, OnInit } from '@angular/core';
import {SeoService} from "../../utils/seo.service";

@Component({
  selector: 'app-nous-rejoindre',
  templateUrl: './nous-rejoindre.component.html',
  styleUrls: ['./nous-rejoindre.component.scss']
})
export class NousRejoindreComponent implements OnInit {

  constructor(private seo:SeoService) {
    this.seo.generateTags({
      title: 'Litopia - Nous rejoindre',
      description: 'venez rejoindre le server de litopia youpi riiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiit',
      //image: 'https://litopia.fr/uneimageàmettre'
    });
  }

  ngOnInit(): void {
  }

}
