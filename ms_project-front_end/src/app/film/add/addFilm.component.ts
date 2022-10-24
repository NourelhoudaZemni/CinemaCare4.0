import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from 'src/Models/film';
import { FilmService } from 'src/service/film.service';


@Component({
  selector: 'app-add',
  templateUrl: './addFilm.component.html',
  styleUrls: ['./addFilm.component.css']
})
export class AddFilmComponent implements OnInit {

  film: Film=new Film("","",0,new Date, "","")
  listefilm:any;
  constructor(private service:FilmService,private router:Router) { }

  ngOnInit() {
  }
public addFilm(){
  let res=  this.service.addFilm(this.film);
  res.subscribe((data)=>this.listefilm=data);
  this.router.navigateByUrl("/getAll");

}

}
