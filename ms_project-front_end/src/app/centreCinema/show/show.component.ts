import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CentrecinemaService } from 'src/app/Services/centrecinema.service';
import { CentreCinema } from 'src/Models/CentreCinema';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(private service:CentrecinemaService,private router:Router) { }
  ListCentreCinema !: CentreCinema[];

 
 
  ngOnInit(): void {
    this.GetAllCentreCinema();
  }
  GetAllCentreCinema()
  {
    this.service.fetchCentreCinemas().subscribe(
      (t)=>{

        this.ListCentreCinema=t;
      },
      (error)=>{
        console.log(error.status)
      }
    );
  }

  Delete(id:number)
  {
    this.service.deleteCentreCinema(id).subscribe(()=>{},(error)=>{console.log(error)});
    this.GetAllCentreCinema();
  }
  Update(id:number)
  {
    this.router.navigate(['/CentreCinema/CentreCinemaHome/update/',id])
  }

}
