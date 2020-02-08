import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public urlLocation: string;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.urlLocation = event.url;
      });
  }

  get positionLocation() {
    switch (this.urlLocation) {
      case '/add': return 'Add Comment';
      case  '/dashboard': return 'Dashboard';
      default : return 'Edit Comment'
    }
  }

}
