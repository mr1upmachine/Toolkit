import { Component } from '@angular/core';

@Component({
  selector: 'tk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  routes = [
    {
      path: '/auth/login',
      label: 'Login'
    },
    {
      path: '/player',
      label: 'Player'
    }
  ];
}
