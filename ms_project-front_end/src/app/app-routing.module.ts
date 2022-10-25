import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFilmComponent } from './film/add/addFilm.component';
import { GetFilmsComponent } from './film/getfilms/getfilms.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const routes: Routes = [
  {
    path: 'reclamation', loadChildren: () => import('./reclamation/reclamation.module').then(m => m.ReclamationModule)
   },
   {
    path: 'CentreCinema', loadChildren: () => import('./centreCinema/centreCinema.module').then(m => m.CentreCinemaModule)
   },
    {
    path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {path:"addFilm", component:AddFilmComponent},
  {path:"getAll", component:GetFilmsComponent},
  {path:"", component:NavBarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
