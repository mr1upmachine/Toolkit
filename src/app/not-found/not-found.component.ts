import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'tk-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {
  @HostBinding('class') readonly hostClass = 'flex-stretch flex-column-nowrap flex-h-center text-center';
}
