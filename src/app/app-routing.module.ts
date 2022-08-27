import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AcceuilComponent} from "./pages/acceuil/acceuil.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {NousRejoindreComponent} from "./pages/nous-rejoindre/nous-rejoindre.component";
import {ReglementComponent} from "./pages/reglement/reglement.component";

const routes: Routes = [
  {title:'Litopia - Acceuil', path:'', component:AcceuilComponent, data: { animation: 'acceuil' }},
  {title:'Litopia - Nous Rejoindre', path:'nous-rejoindre', component:NousRejoindreComponent, data: { animation: 'rejoindre' }},
  {title:'Litopia - Réglement', path:'reglement', component:ReglementComponent, data: { animation: 'reglement' }},
  { path: '**', component:NotFoundComponent, data: { animation: '404' }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking',
    scrollPositionRestoration: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
