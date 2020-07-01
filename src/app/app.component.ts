import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ChildActivationEnd, NavigationEnd, Params, ResolveStart, Router} from '@angular/router';
import {filter, map} from 'rxjs/operators';
import {SetupService} from './services/setup.service';
import {CommonDataService} from './services/common-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {

  title = '';

  public constructor(public setupService: SetupService,
                     private router: Router,
                     private  route: ActivatedRoute,
                     public commonData: CommonDataService) {
  }

  ngOnInit() {

    // this.route.params.subscribe(
    //   (params: Params) => {
    //     this.title = params['category'];
    //     console.log(params);
    //   }
    // );

    this.router.events.pipe(
      filter(event => event instanceof ResolveStart),
      map(event => {
        let data = null;
        let route = event['state'].root;

        while (route) {
          data = route.data || data;
          route = route.firstChild;
        }

        return data;
      }),
    ).subscribe(
      data => {
        console.log('testing================>' + data);

        this.commonData.title = data.title;
      }
    );

  }
}
