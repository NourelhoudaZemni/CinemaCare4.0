import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CentrecinemaService } from 'src/app/Services/centrecinema.service';
import { CentreCinema } from 'src/Models/CentreCinema';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

 
  CentreCinema!:CentreCinema[];

  nom !:string;
  lieu!:string;
  tel!:string;

  CentreCinemaForm = new FormGroup(
		{
			nom : new FormControl(''),
			lieu : new FormControl(''),
			tel : new FormControl(''),

		}
		)
    constructor(private service:CentrecinemaService,private router:Router) { }


    ngOnInit(): void {
      this.service.fetchCentreCinemas().subscribe(
        (t)=>{
          this.CentreCinema=t;
        },
        (error)=>{
          console.log(error.status)
        }
      );
    }
    
    SaveCentreCinema(data:any)
    {
  
  
     
      this.service.addCentreCinema(data).subscribe(()=>{},(error)=>{console.log(error);})
      this.router.navigateByUrl("CentreCinema/CentreCinemaHome/getParent");
   
    }

}
