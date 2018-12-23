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
export class AppNavComponent implements OnInit {
  @HostBinding('class') readonly hostClass = 'flex-stretch flex-column-nowrap';
  readonly faDiceD20 = faDiceD20;
  readonly faCog = faCog;

  toolbarCustomTitle$: BehaviorSubject<string>;
  toolbarActions$: BehaviorSubject<TemplateRef<any>>;

  routes: IAppNavBar[] = [
    {
      path: '/character',
      label: 'Character',
      icon: faFileAlt
    }
  ];

  constructor(
    private appNavService: AppNavService
  ) { }

  ngOnInit(): void {
    this.toolbarCustomTitle$ = this.appNavService.getToolbarTitle$();
    this.toolbarActions$ = this.appNavService.getToolbarActions$();
  }

}
