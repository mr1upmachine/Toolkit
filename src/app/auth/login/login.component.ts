import { Component, HostBinding } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'tk-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @HostBinding('class') readonly hostClass = 'flex-stretch flex-center';

  user$ = this.authService.user$;

  constructor(
    public authService: AuthService
  ) { }

  login() {
    this.authService.loginWithGoogle();
  }

  logout() {
    this.authService.logout();
  }

}
