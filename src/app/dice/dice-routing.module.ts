import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DicePageComponent } from './dice-page/dice-page.component';
import { DiceHistoryComponent } from './dice-history/dice-history.component';

const routes: Routes = [
  {
    path: 'history',
    component: DiceHistoryComponent
  },
  {
    path: '',
    component: DicePageComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiceRoutingModule { }
