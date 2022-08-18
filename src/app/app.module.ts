import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './layout/navbar/navbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {MatTooltipModule} from "@angular/material/tooltip";
import { ThemeChooserComponent } from './layout/navbar/theme-chooser/theme-chooser.component';
import { AcceuilComponent } from './pages/acceuil/acceuil.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FullscreenImgTextComponent } from './pages/acceuil/fullscreen-img-text/fullscreen-img-text.component';
import { SeasonPresentationsComponent } from './pages/acceuil/season-presentations/season-presentations.component';
import { NousRejoindreComponent } from './pages/nous-rejoindre/nous-rejoindre.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ThemeChooserComponent,
    AcceuilComponent,
    NotFoundComponent,
    FullscreenImgTextComponent,
    SeasonPresentationsComponent,
    NousRejoindreComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatButtonModule,
    MatMenuModule,
    MatTooltipModule
  ],
  providers: [
    { provide: 'LOCALSTORAGE', useFactory: getLocalStorage },
    { provide: 'PREFERSCOLOR', useFactory: getPrefersColorSchemeDark }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


export function getLocalStorage() {
  return (typeof window !== "undefined") ? window.localStorage : null;
}

export function getPrefersColorSchemeDark() {
  return (typeof window !== "undefined") ? window.matchMedia('(prefers-color-scheme: dark)') : null;
}
