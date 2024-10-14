import { Component,OnInit } from '@angular/core';
import { MyserviceService, WebApiTab } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selectall-db',
  templateUrl: './selectall-db.component.html',
  styleUrls: ['./selectall-db.component.css']
})
export class SelectallDBComponent implements OnInit {

  Getdata:WebApiTab[] = [];
  constructor(public details:MyserviceService,private router:Router){}

  ngOnInit(): void {
    this.GetAllDetails();
  }
  GetAllDetails(): void {
    this.details.getAllWebApiTabs().subscribe((resp: any) => {
      this.Getdata = resp;
    })
  }

  delete(id: number): void {
    this.details.deleteWebApiTab(id).subscribe(() => {
      this.GetAllDetails();
    },(err => {
      console.log(err);
    }))
  }
}
