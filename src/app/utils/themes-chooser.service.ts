import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

type Theme = 'dark'|'light'
interface ThemeSettings{
  theme:Theme,
  overrideSystemTheme:boolean
}

@Injectable({
  providedIn: 'root'
})
export class ThemesChooserService {
  settings:BehaviorSubject<ThemeSettings>

  constructor() {
    this.settings = new BehaviorSubject<ThemeSettings>(this.retrieveSettings())
    if (!this.settings.value.overrideSystemTheme) this.setSystemMode();

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
      if (!this.settings.value.overrideSystemTheme) {
        if (event.matches) {
          this.updateSettings("dark")
        } else {
          this.updateSettings("light")
        }
      }
    })

    this.settings.subscribe(val=>{
      if(val.theme==='dark')this.setDark()
      if (val.theme==='light')this.setLight()
      this.storeSettings(val);
    })
  }

  public updateSettings(theme:'dark'|'light',overrideSystemTheme?:boolean) {
    this.settings.next({
      theme,
      overrideSystemTheme:typeof overrideSystemTheme!=="undefined"?overrideSystemTheme:this.settings.value.overrideSystemTheme
    })
  }

  private setDark(){
    window.document.body.classList.remove('light-theme')
  }

  private setLight(){
    window.document.body.classList.add('light-theme')
  }

  public setSystemMode(){
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    let theme:Theme;
    if (prefersDarkScheme.matches) {
      theme='dark'
    }else {
      theme='light'
    }
    this.settings.next({
      theme,
      overrideSystemTheme:false
    })
  }

  get accent(){
    return this.settings.value.theme=='light'?'accent':'primary';
  }

  private storeSettings(val:ThemeSettings){
    window.localStorage.setItem('theme',JSON.stringify(val))
  }

  private retrieveSettings():ThemeSettings{
    const item = window.localStorage.getItem('theme')
    if(item !== null){
      const json = JSON.parse(item)
      if (['light','dark'].includes(json.theme) && typeof json.overrideSystemTheme === 'boolean'){
        return json as ThemeSettings;
      }
    }
    // If you can't get config return default one
    return {
      theme:"light",
      overrideSystemTheme: false,
    }
  }
}
