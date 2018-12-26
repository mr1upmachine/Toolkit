import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './shared/auth/auth.guard';
import { NoAuthGuard } from './shared/auth/no-auth.guard';
import { AppNavComponent } from './app-nav/app-nav.component';

// https://stackoverflow.com/questions/41219439/angular2-global-guard-user-has-to-be-logged-in-always
const routes: Routes = [
  {
    path: '404',
    loadChildren: './not-found/not-found.module#NotFoundModule'
  },
  {
    path: 'auth',
    canActivate: [NoAuthGuard],
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: '',
    canActivate: [AuthGuard], // TODO: check if better practice to use canActivateChild
    component: AppNavComponent,
    children: [
      {
        path: '',
        redirectTo: 'characters',
        pathMatch: 'full'
      },
      {
        path: 'characters',
        loadChildren: './character/character.module#CharacterModule'
      },
      {
        path: 'combat',
        loadChildren: './combat/combat.module#CombatModule'
      },
      {
        path: 'dice',
        loadChildren: './dice/dice.module#DiceModule'
      },
      {
        path: 'settings',
        loadChildren: './settings/settings.module#SettingsModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
      // { enableTracing: true }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
