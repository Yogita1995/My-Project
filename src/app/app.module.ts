import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
// import { AngularFontAwesomeModule } from 'angular-font-awesome/dist/src/angular-font-awesome.module';
import {CarouselModule} from 'primeng/carousel';
import { PracticeComponent } from './practice/practice.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
// import { LatestNewsComponent } from './latest-news/latest-news.component';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';





@NgModule({
  declarations: [
    AppComponent,   
    routingComponents
  ],
  imports: [
    BrowserModule,
    CarouselModule,  
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,   
    NoopAnimationsModule, 
    AppRoutingModule,
    HttpClientModule,    
    CommonModule
    
  
  ],
  exports:[
    DropdownModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
