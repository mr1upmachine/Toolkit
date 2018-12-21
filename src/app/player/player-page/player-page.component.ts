import { Component, OnInit, HostBinding } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'tk-player-page',
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.scss']
})
export class PlayerPageComponent implements OnInit {
  @HostBinding('class') readonly hostClass = 'flex-stretch flex-column-nowrap';

  faCoffee = faCoffee;

  constructor() { }

  ngOnInit() {
  }

}
