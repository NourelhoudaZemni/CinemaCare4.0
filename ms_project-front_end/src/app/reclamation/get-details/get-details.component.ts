import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Reclamation } from 'src/Models/Reclamation';
import { ReclamationService } from '../reclamation.service';

@Component({
  selector: 'app-get-details',
  templateUrl: './get-details.component.html',
  styleUrls: ['./get-details.component.css']
})
export class GetDetailsComponent implements OnInit {

  id!:number;
  reclamation !:Reclamation;
  isLoading = true;
  @ViewChild('content') content!: ElementRef;  


 
  constructor(private route:ActivatedRoute, private service:ReclamationService,private router:Router) { }



  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.GetAllIvoice();

  }
  GetAllIvoice()
  {
    this.service.fetchReclamationById(this.id).subscribe((res:any)=>{

    this.reclamation = res;
    this.reclamation.id = res.id;

    this.isLoading = false;
    
  },
  (error)=>{
    console.log(error)
  
  });
}
 
  Delete(id:number)
  {
    this.service.deleteReclamation(id).subscribe(()=>{},(error)=>{console.log(error)});
    // this.router.navigateByUrl('/reclamation/ReclamationHome/getParent');
    this.reload('/reclamation/ReclamationHome/getParent')
    
  }
  async reload(url: string): Promise<boolean> {
    await this.router.navigateByUrl('/', { skipLocationChange: true });
    return this.router.navigateByUrl(url);
  }
  Update(id:number)
  {
    
    this.router.navigate(['/reclamation/ReclamationHome/update/',id])
  }
 

  
  
}

