import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from 'src/Models/film';
import { FilmService } from 'src/service/film.service';

@Component({
  selector: 'app-getfilms',
  templateUrl: './getfilms.component.html',
  styleUrls: ['./getfilms.component.css']
})
export class GetFilmsComponent implements OnInit {

  constructor(private service:FilmService,private router:Router) { }

  ListFilm !: Film[];


  ngOnInit(): void {
    this.GetAllFilms();
  }
  GetAllFilms()
  {
    this.service.getlistefilms().subscribe(
      (t)=>{

        this.ListFilm=t;
      },
      (error)=>{
        console.log(error.status)
      }
    );
  }
  Delete(id:number)
  {
    this.service.deletefilm(id).subscribe(()=>{},(error)=>{console.log(error)});
    // this.router.navigateByUrl('/reclamation/ReclamationHome/getParent');
    //this.router.navigateByUrl('/getAll');
    window.location.reload ()

  }




}
