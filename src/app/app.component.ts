import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent {
   constructor(private http: Http) { }


   gotoDetail=function(url):void {
   
    this.http.get(url)
           .map((response) => response.json()).subscribe((result : any[])=>{
            console.log(result);
            
           })
        }

}