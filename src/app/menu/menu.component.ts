import {Component , Inject , OnInit} from '@angular/core';
import {Dish} from '../shared/dish';

import {DishService} from '../services/dish.service';
import {expand , flyInOut} from '../animations/app.animation';

@Component({
  templateUrl: './menu.component.html' ,
  selector: 'app-menu' ,
  styleUrls: ['./menu.component.css'] ,
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '[@flyInOut]': 'true' ,
    'style': 'display: block;'
  } ,
  animations: [
    flyInOut() ,
    expand()
  ]
})
export class MenuComponent implements OnInit {

  dishes: Dish[];
  errMess: string;

  constructor(private dishService: DishService ,
              @Inject('BaseURL') public BaseURL) {
  }

  ngOnInit() {
    this.dishService.getDishes().subscribe(dishes => this.dishes = dishes ,
      errmess => this.errMess = <any>errmess);
  }
}
