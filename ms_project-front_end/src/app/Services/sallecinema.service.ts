import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SalleCinema } from 'src/Models/SalleCinema';

@Injectable({
  providedIn: 'root'
})
export class SallecinemaService {

  constructor(private http:HttpClient,private router:Router) 
  { }
  baseurl=environment.url;
  
  fetchSalleCinemas():Observable<SalleCinema[]>
  {
    return this.http.get<SalleCinema[]>(this.baseurl+"microservicesallecinema/salle/list");
  }
  fetchSalleCinemaById(id:any):Observable<SalleCinema>
  {
    return this.http.get<SalleCinema>(this.baseurl+"microservicesallecinema/salle/findById/"+id);
  }
  
  addSalleCinema(data:SalleCinema)
  {
    return this.http.post(this.baseurl+"microservicesallecinema/salle/add",data);
  }
  
  
  deleteSalleCinema(id:any){
  
    return this.http.delete(this.baseurl+"microservicesallecinema/salle/delete/"+id);
  
  }
  UpdatSalleCinema(data:SalleCinema):Observable<SalleCinema>
  {
    return this.http.put<SalleCinema>(this.baseurl+"microservicesallecinema/salle/update/",data);
  
  }
  
}
