import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class BooksService {
    constructor(private http: Http) { }
   
    getBooks(link) {
       return this.http.get(link)
          .map((response) => response.json())
          };
      }
