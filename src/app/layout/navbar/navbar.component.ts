import {Component} from '@angular/core';
import {ThemesChooserService} from "../../utils/themes-chooser.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss','navbar.desktop.component.scss','navbar.mobile.component.scss','navbar.theme.component.scss'],
})
export class NavbarComponent {
  constructor(private themesChooser:ThemesChooserService) {
  }

  get accent(){
    return this.themesChooser.accent
  }
}
