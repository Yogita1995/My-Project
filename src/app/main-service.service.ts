import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {
  private baseurl:string="https://www.google.com/url?sa=D&q=https://newsapi.org/v2/everything%3Fq%3Dbitcoin%26amp%253Bfrom%3D2020-03-25%26amp%253BsortBy%3DpublishedAt%26amp%253BapiKey%3D1848b5465b1449d78d10c2991b1bea98&ust=1604322180000000&usg=AOvVaw3wSnsjStJTEfanHa7q2d7a&hl=en&source=gmail";

  constructor(private http: HttpClient) { 

  }
  getnews() {
    return this.http.get(this.baseurl).pipe(map(result => {
      return result;
    }))
    // return this.http.get(this.baseurl);
     
  }
}
