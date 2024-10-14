import { Component,OnInit } from '@angular/core';
import { MyserviceService,WebApiTab } from '../myservice.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-select-details-with-id',
  templateUrl: './select-details-with-id.component.html',
  styleUrls: ['./select-details-with-id.component.css']
})
export class SelectDetailsWithIdComponent implements OnInit {
  student: WebApiTab | undefined;
  id:number = 0;
  constructor(public rest:MyserviceService, private route:ActivatedRoute, private router:Router){}

  ngOnInit(): void {
    var paramId = this.route.snapshot.paramMap.get("id");
    if(paramId !== null && paramId !== undefined) {
      this.id =+ paramId;
    }

    this.rest.getWebApiTab(this.id).subscribe(
      (data: WebApiTab) => this.student = { ...data }
    );
  }
}
