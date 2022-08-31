import {Component} from '@angular/core';
import {AuthenticationService} from "../../../auth/services/authentication.service";

@Component({
  selector: 'app-nous-rejoindre-form',
  templateUrl: './nous-rejoindre-form.component.html',
  styleUrls: ['./nous-rejoindre-form.component.scss']
})
export class NousRejoindreFormComponent {

  constructor(public authService : AuthenticationService) {
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
