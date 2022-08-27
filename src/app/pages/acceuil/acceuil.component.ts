import { Component, OnInit } from '@angular/core';
import {upFadeInAnimation} from "../../animations/up-fade-in.animation";

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss'],
  animations:[upFadeInAnimation]
})
export class AcceuilComponent implements OnInit {
  appearSet=new Set<string>();

  constructor() { }

  ngOnInit(): void {
  }

  appear(appearName:string){
    console.log(appearName+' is appear')
    this.appearSet.add(appearName)
  }

  isAppear(appearName:string){
    return this.appearSet.has(appearName)
  }

}
