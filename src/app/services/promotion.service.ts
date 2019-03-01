import {Injectable} from '@angular/core';
import {Promotion} from '../shared/promotion';

import {Observable , of} from 'rxjs';
import {delay , map} from 'rxjs/operators';
import {Leader} from '../shared/leader';
import {baseURL} from '../shared/baseurl';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PromotionService {

  constructor(private http: HttpClient) {
  }

  getPromotions(): Observable<Promotion[]> {
    return this.http.get<Promotion[]>(baseURL + 'promotions');
  }

  getPromotion(id: number): Observable<Promotion> {
    return this.http.get<Promotion>(baseURL + 'promotions/' + id);
  }

  getFeaturedPromotion(): Observable<Promotion> {
    return this.http.get<Promotion[]>(baseURL + 'promotions?featured=true').pipe(map(promotions => promotions[0]));
  }

  getPromotionIds(): Observable<number[] | any> {
    return this.getPromotions().pipe(map(promotions => promotions.map(promotion => promotion.id)));
  }
}
