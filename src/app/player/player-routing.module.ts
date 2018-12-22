import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerPageComponent } from './player-page/player-page.component';

const routes: Routes = [
  {
    path: '',
    component: PlayerPageComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerRoutingModule { }
