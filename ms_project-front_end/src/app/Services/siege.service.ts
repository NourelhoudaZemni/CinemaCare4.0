import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Siege } from 'src/Models/Siege';

@Injectable({
  providedIn: 'root'
})
export class SiegeService {


  constructor(private http:HttpClient,private router:Router) 
  { }
  baseurl=environment.url;
  
  fetchSieges():Observable<Siege[]>
  {
    return this.http.get<Siege[]>(this.baseurl+"microservicesallecinema/siege/list");
  }
  fetchSiegeById(id:any):Observable<Siege>
  {
    return this.http.get<Siege>(this.baseurl+"microservicesallecinema/siege/findById/"+id);
  }
  
  addSiege(data:Siege)
  {
    return this.http.post(this.baseurl+"microservicesallecinema/siege/add",data);
  }
  
  
  deleteSiege(id:any){
  
    return this.http.delete(this.baseurl+"microservicesallecinema/siege/delete/"+id);
  
  }
  UpdatSiege(data:Siege):Observable<Siege>
  {
    return this.http.put<Siege>(this.baseurl+"microservicesallecinema/siege/update/",data);
  
  }
}
