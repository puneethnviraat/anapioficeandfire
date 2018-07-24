import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MyserviceService } from './myservice.service';
import { BooksComponent } from './books/books.component';
import { CharectersComponent } from './charecters/charecters.component';
import { HousesComponent } from './houses/houses.component';
import { DetailsComponent } from './details/details.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import{RouterModule} from '@angular/router';



@NgModule({
   declarations: [
      AppComponent,
      BooksComponent,
      CharectersComponent,
      HousesComponent,
      DetailsComponent,
      BsNavbarComponent
       ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      HttpModule,
      RouterModule.forRoot([
 
      { path: '', component:      BsNavbarComponent },
        { path: 'books', component: BooksComponent },
        { path: 'charecters', component: CharectersComponent },

        { path: 'houses', component: HousesComponent },
        
    ])

   ],
   providers: [MyserviceService],
   bootstrap: [AppComponent]
})
export class AppModule { }