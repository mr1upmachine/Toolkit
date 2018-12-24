// Angular
import {
  Component,
  HostBinding,
  OnInit,
  TemplateRef
} from '@angular/core';

import { BehaviorSubject } from 'rxjs';

// Font Awesome
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faBars,
  faCog,
  faDiceD20,
  faFileAlt
} from '@fortawesome/free-solid-svg-icons';
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
  readonly faCog = faCog;
  readonly faBars = faBars;

  toolbarCustomTitle$ = this.appNavService.getToolbarTitle$();
  toolbarActions$ = this.appNavService.getToolbarActions$();
  toolbarActionMenu$ = this.appNavService.getToolbarActionMenu$();

  routes: IAppNavBar[] = [
    {
      path: '/characters',
      label: 'Character',
      icon: faFileAlt
    }
  ];

  constructor(
    private appNavService: AppNavService
  ) { }
}
