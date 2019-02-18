import {Component , Inject , OnInit} from '@angular/core';
import {Leader} from '../shared/leader';
import {LeaderService} from '../services/leader.service';
import {expand , flyInOut} from '../animations/app.animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'] ,
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
export class AboutComponent implements OnInit {

  leaders: Leader[];
  errMess: string;

  constructor(private leaderservice: LeaderService ,
              @Inject('BaseURL') public BaseURL) {
  }

  ngOnInit() {
    this.leaderservice.getLeaders()
      .subscribe(leaders => this.leaders = leaders ,
        errmess => this.errMess = <any>errmess);
  }

}
