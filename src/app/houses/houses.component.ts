import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Http } from '@angular/http';
@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {

  constructor(private myservice: MyserviceService,private http: Http ) { }
  Houses=[];
  details=[];
  ngOnInit() {
    this.myservice.getHouses()
    .subscribe((res : any[])=>{
      console.log(res);
      this.Houses = res;

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
