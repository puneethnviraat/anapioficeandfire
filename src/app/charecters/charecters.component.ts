import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { MyserviceService } from '../myservice.service';
@Component({
  selector: 'app-charecters',
  templateUrl: './charecters.component.html',
  styleUrls: ['./charecters.component.css']
})
export class CharectersComponent {

  constructor(private myservice: MyserviceService, private http: Http ) { }
  Charecters=[];
  details=[];
  ngOnInit() {
       this.myservice.getCharecters()
    .subscribe((resss : any[])=>{
      console.log(resss);
      this.Charecters = resss;

      })
  }
  gotoDetail=function(url):void {
   
    this.http.get(url)
           .map((response) => response.json())
           .subscribe((result : any[])=>{
            console.log(result);
            this.details=result;
           })
        }
}
