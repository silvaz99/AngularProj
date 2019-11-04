import { Component, OnInit } from '@angular/core';
import { DateFoodService } from '../date-food.service';

@Component({
  selector: 'app-date-food',
  templateUrl: './date-food.component.html',
  styleUrls: ['./date-food.component.css']
})
export class DateFoodComponent implements OnInit {

  constructor(private date : DateFoodService) { }

  dateString : any = ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"];
  dateStringSend : any;
  dateStringSend2 : any;

  arrayDate : any = [];
  i:  any = [];
  ngOnInit() {

  }

  getDate() {
    this.date.getBetweenDate(this.dateStringSend+"-1-1|"+this.dateStringSend2+"-1-1").subscribe(
      res => {
        console.log(this.dateStringSend+"-1-1|"+this.dateStringSend2+"-1-1");
        console.log(res);
        for (this.i = 0; this.i < res.length ; this.i++) {
          this.arrayDate.push(res[this.i]['product']);
        }

        console.log(this.arrayDate);
      }
    );
  }

}
