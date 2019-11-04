import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DateFoodService {

  apiEnpoint : string = "https://thereportoftheweek-api.herokuapp.com/reports";
  constructor(private http: HttpClient) { }

  getBetweenDate(date) : Observable<any>{
    return this.http.get(this.apiEnpoint + "?between=" + date);
  } 
}
