// Angular
import {
  Component,
  HostBinding
} from '@angular/core';

// Font Awesome
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faEllipsisV } from '@fortawesome/pro-regular-svg-icons';
import {
  faDiceD6,
  faDiceD20,
  faFileAlt
} from '@fortawesome/free-solid-svg-icons';
import {
  faSwords
} from '@fortawesome/pro-solid-svg-icons';

import { AppNavService } from './app-nav.service';

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
export class AppNavComponent {
  @HostBinding('class') readonly hostClass = 'flex-stretch flex-column-nowrap';
  readonly faDiceD20 = faDiceD20;
  readonly faEllipsisV = faEllipsisV;

  toolbarCustomTitle$ = this.appNavService.getToolbarTitle$();
  toolbarActions$ = this.appNavService.getToolbarActions$();
  toolbarActionMenu$ = this.appNavService.getToolbarActionMenu$();

  routes: IAppNavBar[] = [
    {
      path: '/characters',
      label: 'Character',
      icon: faFileAlt
    },
    {
      path: '/dice',
      label: 'Dice',
      icon: faDiceD6
    },
    {
      path: '/combat',
      label: 'Combat',
      icon: faSwords
    }
  ];

  constructor(
    private appNavService: AppNavService
  ) { }
}
