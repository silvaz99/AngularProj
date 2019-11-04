import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class FoodServiceService {

  apiEnpoint : string = "https://thereportoftheweek-api.herokuapp.com/reports";
  constructor(private http: HttpClient) { }

  getFood() : Observable<any>{
    return this.http.get(this.apiEnpoint);
  } 

  getFoodbyCategory(category) : Observable<any> {
    return this.http.get(this.apiEnpoint + "?category=" + category);
  }


}
