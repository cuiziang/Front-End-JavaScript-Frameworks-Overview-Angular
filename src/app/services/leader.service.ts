import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import {Promotion} from '../shared/promotion';
import {PROMOTIONS} from '../shared/promotions';

@Injectable()
export class LeaderService {

  constructor() { }

  getLeaders(): Leader[] {
    return LEADERS;
  }

  getLeader(id: number): Leader {
    return LEADERS.filter((leader) => (leader.id === id))[0];
  }

  getFeaturedleader(): Leader {
    return LEADERS.filter((leader) => leader.featured)[0];
  }
}
