import { Component, OnInit } from '@angular/core';
import { FoodServiceService } from '../food-service.service';


@Component({
  selector: 'app-food-component',
  templateUrl: './food-component.component.html',
  styleUrls: ['./food-component.component.css']
})
export class FoodComponentComponent implements OnInit {

  foodData : any = "";
  constructor(private food : FoodServiceService) { }

  ngOnInit() {
    this.food.getFood().subscribe(
      res => {
        this.foodData = res[10]['product'];
        console.log("The value of a is " + this.foodData);
      }
    )
  }

}
