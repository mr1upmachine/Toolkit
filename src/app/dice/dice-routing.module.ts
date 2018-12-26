import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DicePageComponent } from './dice-page/dice-page.component';

const routes: Routes = [
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
