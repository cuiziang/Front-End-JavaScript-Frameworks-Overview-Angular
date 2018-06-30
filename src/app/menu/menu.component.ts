import {Component , OnInit} from '@angular/core';
import {Dish} from '../shared/dish';

import {DishService} from '../services/dish.service';

@Component({
  templateUrl: './menu.component.html' ,
  selector: 'app-menu' ,
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  dishes: Dish[];

  selectedDish: Dish;

  constructor(private dishService: DishService) {
  }

  ngOnInit() {
    this.dishService.getDishes().subscribe(dishes => this.dishes = dishes);
  }

  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }

}
