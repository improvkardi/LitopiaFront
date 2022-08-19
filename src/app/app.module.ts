import {Inject, NgModule, PLATFORM_ID} from '@angular/core';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './layout/navbar/navbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule, MatIconRegistry} from "@angular/material/icon";
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
import { PictureContentDeliveryComponent } from './utils/picture-content-delivery/picture-content-delivery.component';
import { TimelineComponent } from './pages/acceuil/timeline/timeline.component';
import { TimelineItemComponent } from './pages/acceuil/timeline/timeline-item/timeline-item.component';
import { FooterComponent } from './layout/footer/footer.component';
import {HttpClientModule} from "@angular/common/http";
import { AProposComponent } from './pages/acceuil/a-propos/a-propos.component';
import {isPlatformServer} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ThemeChooserComponent,
    AcceuilComponent,
    NotFoundComponent,
    FullscreenImgTextComponent,
    SeasonPresentationsComponent,
    NousRejoindreComponent,
    PictureContentDeliveryComponent,
    TimelineComponent,
    TimelineItemComponent,
    FooterComponent,
    AProposComponent
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
    MatTooltipModule,
    HttpClientModule
  ],
  providers: [
    { provide: 'LOCALSTORAGE', useFactory: getLocalStorage },
    { provide: 'PREFERSCOLOR', useFactory: getPrefersColorSchemeDark }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer, @Inject(PLATFORM_ID) private platformId: string) {
    const svgUrl = 'assets/svg/github-logo.svg';
    if (isPlatformServer(this.platformId)) {
      /* Register empty icons for server-side-rendering to prevent errors */
      this.matIconRegistry.addSvgIconLiteral('github', this.domSanitizer.bypassSecurityTrustHtml('<svg></svg>'));
    } else {
      this.matIconRegistry.addSvgIcon('github', this.domSanitizer.bypassSecurityTrustResourceUrl(svgUrl));
    }
  }
}


export function getLocalStorage() {
  return (typeof window !== "undefined") ? window.localStorage : null;
}

export function getPrefersColorSchemeDark() {
  return (typeof window !== "undefined") ? window.matchMedia('(prefers-color-scheme: dark)') : null;
}
