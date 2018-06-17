import {Injectable} from '@angular/core';
import {PROMOTIONS} from '../shared/promotions';
import {Promotion} from '../shared/promotion';

@Injectable()
export class PromotionService {

  constructor() {
  }

  getPromotions(): Promise<Promotion[]> {
    return Promise.resolve(PROMOTIONS);
  }

  getPromotion(id: number): Promise<Promotion> {
    return Promise.resolve(PROMOTIONS.filter((promo) => (promo.id === id))[0]);
  }

  getFeaturedPromotion(): Promise<Promotion> {
    return Promise.resolve(PROMOTIONS.filter((promotion) => promotion.featured)[0]);
  }
}
