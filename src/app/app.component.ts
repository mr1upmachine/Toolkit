import { Component } from '@angular/core';

// Font Awesome
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faCog,
  faWalking
} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from './auth/auth.service';

interface IAppNavBar {
  path: string;
  label: string;
  icon: IconDefinition;
}

@Component({
  selector: 'tk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  routes: IAppNavBar[] = [
    {
      path: '/player',
      label: 'Player',
      icon: faWalking
    },
    {
      path: '/settings',
      label: 'Settings',
      icon: faCog
    }
  ];

  constructor(
    public authService: AuthService
  ) { }
}
