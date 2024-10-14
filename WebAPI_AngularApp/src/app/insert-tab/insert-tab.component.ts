import { Component,OnInit,Input } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert-tab',
  templateUrl: './insert-tab.component.html',
  styleUrls: ['./insert-tab.component.css']
})
export class InsertTabComponent implements OnInit {

  @Input() userData = { Name: '', Age: 0, mark: 0 };

  constructor(public rest:MyserviceService,private router:Router){}
  ngOnInit(): void {
  }
  adduserdata():void {
    this.rest.addWebApiTab(this.userData).subscribe((result) => {
      this.router.navigate(['/AllStudents']);
    },(err) => {
      console.log(err);
    })
  }
}
