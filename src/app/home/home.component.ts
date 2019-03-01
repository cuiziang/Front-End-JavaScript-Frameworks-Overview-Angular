import {Component , Inject , OnInit} from '@angular/core';

import {Dish} from '../shared/dish';
import {DishService} from '../services/dish.service';
import {Promotion} from '../shared/promotion';
import {PromotionService} from '../services/promotion.service';
import {Leader} from '../shared/leader';
import {LeaderService} from '../services/leader.service';
import {expand , flyInOut} from '../animations/app.animation';

@Component({
  selector: 'app-home' ,
  templateUrl: './home.component.html' ,
  styleUrls: ['./home.component.css'] ,
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
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  leader: Leader;
  dishErrMess: string;
  promotionErrMess: string;
  leaderErrMess: string;

  constructor(private dishservice: DishService ,
              private promotionservice: PromotionService ,
              private leaderservice: LeaderService ,
              @Inject('BaseURL') public BaseURL) {
  }

  ngOnInit() {
    this.dishservice.getFeaturedDish().subscribe(dish => this.dish = dish ,
      dishErrMess => this.dishErrMess = <any>dishErrMess);
    this.promotionservice.getFeaturedPromotion().subscribe(promotion => this.promotion = promotion ,
      promotionErrMess => this.promotionErrMess = <any>promotionErrMess);
    this.leaderservice.getFeaturedleader().subscribe(leader => this.leader = leader ,
      leaderErrMess => this.leaderErrMess = <any>leaderErrMess);
  }
}
