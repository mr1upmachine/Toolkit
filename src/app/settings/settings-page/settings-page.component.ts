import { Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'tk-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent {
  @HostBinding('class') readonly hostClass = 'flex-stretch flex-column-nowrap p-v-10 p-h-20';
  value;

  constructor(
    public authService: AuthService,
    private router: Router
  ) { }

  logout() {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}
