import { Component, OnInit, HostBinding } from '@angular/core';

// Font Awesome
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faCog,
  faWalking
} from '@fortawesome/free-solid-svg-icons';

interface IAppNavBar {
  path: string;
  label: string;
  icon: IconDefinition;
}

@Component({
  selector: 'tk-app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss']
})
export class AppNavComponent implements OnInit {
  @HostBinding('class') readonly hostClass = 'flex-stretch flex-column-nowrap';
  readonly faCog = faCog;

  routes: IAppNavBar[] = [
    {
      path: '/player',
      label: 'Player',
      icon: faWalking
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
