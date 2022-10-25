import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CentrecinemaService } from 'src/app/Services/centrecinema.service';
import { CentreCinema } from 'src/Models/CentreCinema';
import { Reclamation } from 'src/Models/Reclamation';

import { GetParentComponent } from '../get-parent/get-parent.component';
@Component({
  selector: 'app-get-child',
  templateUrl: './get-child.component.html',
  styleUrls: ['./get-child.component.css']
})
export class GetChildComponent implements OnInit {
  @Input() CentreCinema!:CentreCinema;
  @Input() photoURL:any;

  @Output() notif= new EventEmitter<any>();
  
  @ViewChild(GetParentComponent) c!:GetChildComponent;
  
    constructor(private service:CentrecinemaService,private router:Router) { }
  
    

  ngOnInit(): void {
  }
  Delete()
  {
    this.notif.emit(this.CentreCinema);

  }
  UpdateUser(id:number)
  {
    this.router.navigate(['CentreCinema/CentreCinemaHome/update',id])
  }
}
