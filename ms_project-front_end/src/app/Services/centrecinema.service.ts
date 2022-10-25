import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CentreCinema } from 'src/Models/CentreCinema';

@Injectable({
  providedIn: 'root'
})
export class CentrecinemaService {

  constructor(private http:HttpClient,private router:Router) 
  { }
  baseurl=environment.url;
  
  fetchCentreCinemas():Observable<CentreCinema[]>
  {
    return this.http.get<CentreCinema[]>(this.baseurl+"microservicesallecinema/centre/list");
  }
  fetchCentreCinemaById(id:any):Observable<CentreCinema>
  {
    return this.http.get<CentreCinema>(this.baseurl+"microservicesallecinema/centre/findById/"+id);
  }
  
  addCentreCinema(data:CentreCinema)
  {
    return this.http.post(this.baseurl+"microservicesallecinema/centre/add",data);
  }
  
  
  deleteCentreCinema(id:any){
  
    return this.http.delete(this.baseurl+"microservicesallecinema/centre/delete/"+id);
  
  }
  UpdatCentreCinema(data:CentreCinema):Observable<CentreCinema>
  {
    return this.http.put<CentreCinema>(this.baseurl+"microservicesallecinema/centre/update/",data);
  
  }
  
}
