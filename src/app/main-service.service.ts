import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { observable, Observable,throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MainServiceService {    
  // public base:string="http://localhost:3000"
 public baseurl:string="http://newsapi.org/v2/everything?q=bitcoin&from=2020-12-01&sortBy=publishedAt&apiKey=1848b5465b1449d78d10c2991b1bea98";
  
  constructor(private http: HttpClient) { 

  }
  getnews():Observable<any> {
    return this.http.get<any>(this.baseurl).pipe(catchError(this.handleError))
    // return this.http.get(this.baseurl);
     
  }
  handleError(error){
    return throwError(error.message || "Server Error")
  }
  
  // getnews():Observable<any> {
  //     return this.http.get<any>(this.baseurl).pipe(catchError(this.handleError))
  //     //  return this.http.get(this.baseurl);
       
  //   }
  //   handleError(error:HttpErrorResponse){
  //     return Observable.throwError(error.message || "Server Error")
  //   }
}
