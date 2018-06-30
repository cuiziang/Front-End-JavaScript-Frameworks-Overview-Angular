import {Injectable} from '@angular/core';
import {PROMOTIONS} from '../shared/promotions';
import {Promotion} from '../shared/promotion';

import {Observable , of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable()
export class PromotionService {

  constructor() {
  }

  getPromotions(): Observable<Promotion[]> {
    return of(PROMOTIONS).pipe(delay(2000));
  }

  getPromotion(id: number): Observable<Promotion> {
    return of(PROMOTIONS.filter((promotion) => (promotion.id === id))[0]).pipe(delay(2000));
  }

  getFeaturedPromotion(): Observable<Promotion> {
    return of(PROMOTIONS.filter((promotion) => promotion.featured)[0]).pipe(delay(2000));
  }
}
