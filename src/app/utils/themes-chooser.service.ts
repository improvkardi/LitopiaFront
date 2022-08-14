import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemesChooserService {
  overrideSystemMode = false;
  lightMode = true;

  constructor() {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
      if (!this.overrideSystemMode) {
        if (event.matches) {
          this.setDarkMode()
        } else {
          this.setLightMode()
        }
      }
    })
    this.setSystemMode();
  }

  public setDarkMode(overrideSystem:boolean=false) {
    window.document.body.classList.remove('light-theme')
    this.lightMode = false
    this.overrideSystemMode=overrideSystem
  }

  public setLightMode(overrideSystem:boolean=false) {
    window.document.body.classList.add('light-theme')
    this.lightMode = true
    this.overrideSystemMode=overrideSystem
  }

  public setSystemMode(){
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    if (prefersDarkScheme.matches) {
      this.setDarkMode()
    }else {
      this.setLightMode()
    }
  }

  get accent(){
    return this.lightMode?'accent':'primary';
  }
}
