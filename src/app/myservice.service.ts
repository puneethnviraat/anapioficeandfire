import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MyserviceService {
    constructor(private http: Http) { }
   
    getBooks() {
       return this.http.get("https://anapioficeandfire.com/api/books")
          .map((response) => response.json())
          };
          getCharecters() {
            return this.http.get("https://anapioficeandfire.com/api/characters")
               .map((response) => response.json())
               };
               getHouses() {
                return this.http.get("https://anapioficeandfire.com/api/houses")
                   .map((response) => response.json())
                   };
                   
      }
