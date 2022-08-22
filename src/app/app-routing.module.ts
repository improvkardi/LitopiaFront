import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AcceuilComponent} from "./pages/acceuil/acceuil.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {NousRejoindreComponent} from "./pages/nous-rejoindre/nous-rejoindre.component";
import {NousRejoindreFormComponent} from "./pages/nous-rejoindre-form/nous-rejoindre-form.component";
import {ReglementComponent} from "./pages/reglement/reglement.component";

const routes: Routes = [
  {title:'Litopia - Acceuil', path:'', component:AcceuilComponent},
  {title:'Litopia - Nous Rejoindre', path:'nous-rejoindre',
    children: [
      {
        path: '',
        component:NousRejoindreComponent
      },
      {
        path: ':id',
        component:NousRejoindreFormComponent
      }
    ]
  },
  {title:'Litopia - Réglement', path:'reglement', component:ReglementComponent},
  { path: '**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
