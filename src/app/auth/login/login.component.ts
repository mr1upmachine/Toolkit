import { Component, HostBinding } from '@angular/core';
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../shared/auth/auth.service';

@Component({
  selector: 'tk-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @HostBinding('class') readonly hostClass = 'flex-stretch flex-column-nowrap flex-center';
  readonly faDiceD20 = faDiceD20;

  constructor(
    public authService: AuthService
  ) { }
}
