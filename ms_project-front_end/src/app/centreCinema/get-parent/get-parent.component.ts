import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CentrecinemaService } from 'src/app/Services/centrecinema.service';
import { CentreCinema } from 'src/Models/CentreCinema';


@Component({
  selector: 'app-get-parent',
  templateUrl: './get-parent.component.html',
  styleUrls: ['./get-parent.component.css']
})
export class GetParentComponent implements OnInit {

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


  executes(i:any){
    this.service.deleteCentreCinema(i.id).subscribe(()=>{},(error)=>{console.log(error)});
    this.GetAllCentreCinema();
  }

}
