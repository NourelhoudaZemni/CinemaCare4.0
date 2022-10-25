import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { CentrecinemaService } from 'src/app/Services/centrecinema.service';
import { CentreCinema } from 'src/Models/CentreCinema';


@Component({
  selector: 'app-get-details',
  templateUrl: './get-details.component.html',
  styleUrls: ['./get-details.component.css']
})
export class GetDetailsComponent implements OnInit {

  id!:number;
  CentreCinema !:CentreCinema;
  isLoading = true;
  @ViewChild('content') content!: ElementRef;  


 
  constructor(private route:ActivatedRoute, private service:CentrecinemaService,private router:Router) { }



  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.GetAllIvoice();

  }
  GetAllIvoice()
  {
    this.service.fetchCentreCinemaById(this.id).subscribe((res:any)=>{

    this.CentreCinema = res;
    this.CentreCinema.idCentre = res.id;

    this.isLoading = false;
    
  },
  (error)=>{
    console.log(error)
  
  });
}
 
  Delete(id:number)
  {
    this.service.deleteCentreCinema(id).subscribe(()=>{},(error)=>{console.log(error)});
    // this.router.navigateByUrl('/CentreCinema/CentreCinemaHome/getParent');
    this.reload('/CentreCinema/CentreCinemaHome/getParent')
    
  }
  async reload(url: string): Promise<boolean> {
    await this.router.navigateByUrl('/', { skipLocationChange: true });
    return this.router.navigateByUrl(url);
  }
  Update(id:number)
  {
    
    this.router.navigate(['/CentreCinema/CentreCinemaHome/update/',id])
  }
 


  
}

