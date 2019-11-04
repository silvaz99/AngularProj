import { Component, OnInit } from '@angular/core';
import { FoodServiceService } from '../food-service.service';


@Component({
  selector: 'app-food-component',
  templateUrl: './food-component.component.html',
  styleUrls: ['./food-component.component.css']
})
export class FoodComponentComponent implements OnInit {

  foodData : any = "";
  foodDataArray : any = ["Running On Empty", "Energy Crisis"];
  foodDataSendArray : any = [];

  showByCat : any = [];
  i:  any = [];

  rating : any = ["Ruim", "Medio", "Bom", "Not Rated"];
  ratingSend : any = [];
  constructor(private food : FoodServiceService) { }

  ngOnInit() {
    this.food.getFood().subscribe(
      res => {
        this.foodData = res[10]['product'];
        console.log("The value of a is " + this.foodData);
      }
    )
  }

  getFood() {
    this.food.getFoodbyCategory(this.foodDataSendArray).subscribe(
      res => {
        for (this.i = 0; this.i < res.length ; this.i++){
          switch(this.ratingSend){
            case "Ruim":{
              if (res[this.i]['rating'] < 4)
                this.showByCat.push(res[this.i]['product']);
              break;
            }
            case "Medio":{
              if (res[this.i]['rating'] > 4 && res[this.i]['rating'] < 7)
                this.showByCat.push(res[this.i]['product']);
                break;
            }
            case "Bom":{
              if (res[this.i]['rating'] > 7)
                this.showByCat.push(res[this.i]['product']);
                break;
            }
            case "Not Rated": {
              if (res[this.i]['rating'] == null)
                this.showByCat.push(res[this.i]['product']);
              break;
            }
            
          }
          
        }
        console.log(this.showByCat);
        console.log(this.ratingSend);
      }
    );
  }





}
