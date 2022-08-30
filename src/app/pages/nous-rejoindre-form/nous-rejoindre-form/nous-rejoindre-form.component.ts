import {Component} from '@angular/core';

@Component({
  selector: 'app-nous-rejoindre-form',
  templateUrl: './nous-rejoindre-form.component.html',
  styleUrls: ['./nous-rejoindre-form.component.scss']
})
export class NousRejoindreFormComponent {

  constructor() {
  }

  getClassForUsername(name:string){
    return {
      backgroundImage:`url(https://mc-heads.net/head/${name}/left)`,
      backgroundPosition:'center center',
      backgroundRepeat:'no-repeat',
      backgroundSize:'cover'
    }
  }
}
