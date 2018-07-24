import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Http } from '@angular/http';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent  {

  constructor(private myservice: MyserviceService, private http: Http) { }
  Books=[];
  details=[];
  ngOnInit() {
 
    this.myservice.getBooks()
    .subscribe((res : any[])=>{
      console.log(res);
      this.Books = res;

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
