import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Film } from 'src/Models/film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http:HttpClient) { }

  public addFilm(film: Film){
    return this.http.post("http://localhost:8083/FilmService/add",film);
  }

  public getlistefilms(){
    return this.http.get<Film[]>("http://localhost:8083/FilmService/getAll");
  }
  deletefilm(id:any){

    return this.http.delete("http://localhost:8083/FilmService/"+id);

  }
  Updatfilms(data:Film)
  {
    return this.http.put<Film>("http://localhost:8083/FilmService/",data);

  }
}
