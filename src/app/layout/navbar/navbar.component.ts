import {Component} from '@angular/core';
import {ThemesChooserService} from "../../utils/themes-chooser.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss','navbar.desktop.component.scss','navbar.mobile.component.scss','navbar.theme.component.scss'],
})
export class NavbarComponent {
  constructor(private themesChooser:ThemesChooserService,private router: Router) { }

  get accent(){
    return this.themesChooser.accent
  }

  checkUrl(s: string) {
    return this.router.url === s
  }
}
