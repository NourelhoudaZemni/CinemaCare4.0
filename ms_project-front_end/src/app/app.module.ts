import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CentreCinemaComponent } from './centreCinema/centreCinema.component';

import { AddFilmComponent } from './film/add/addFilm.component';
import { FilmService } from 'src/service/film.service';
import { RouterLink } from '@angular/router';
import { GetFilmsComponent } from './film/getfilms/getfilms.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NotFoundComponent,
    AddFilmComponent,
    GetFilmsComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    ReactiveFormsModule,ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,
    RouterLink
  ],
  exports: [NavBarComponent],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'fr' // 'de' for Germany, 'fr' for France ...
     },FilmService]
  ,
  bootstrap: [AppComponent]

})
export class AppModule { }
