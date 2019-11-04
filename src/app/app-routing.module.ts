import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodComponentComponent } from './food-component/food-component.component';
import { DateFoodComponent } from './date-food/date-food.component';

const routes: Routes = [
    {path : 'food', component: FoodComponentComponent},
    {path : 'date', component: DateFoodComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }