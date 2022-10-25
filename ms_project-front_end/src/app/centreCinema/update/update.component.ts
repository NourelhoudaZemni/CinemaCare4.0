import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CentrecinemaService } from 'src/app/Services/centrecinema.service';
import { CentreCinema } from 'src/Models/CentreCinema';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private ac:ActivatedRoute,private service:CentrecinemaService,private router:Router) { }


  isLoading = true;

  CentreCinema = new CentreCinema();
  id=this.ac.snapshot.params['id'];
  
  ngOnInit(): void {
    this.getCentreCinema();
  }
 

  getCentreCinema()
  {
    this.service.fetchCentreCinemaById(this.id).subscribe(
      (res:CentreCinema)=>
      {
        this.CentreCinema=res;
        this.CentreCinema.idCentre=res.idCentre;
        this.isLoading = false;
      },
      (error)=>{
        console.log(error)
      }
    );
  }

  UpdateCentreCinema(data:CentreCinema){
    
    data.idCentre=this.id;

    this.service.UpdatCentreCinema(data).subscribe(()=>{},(error)=>{console.log(error);})
    this.router.navigateByUrl("CentreCinema/CentreCinemaHome/detail/"+this.id);
    
  }
  

}
