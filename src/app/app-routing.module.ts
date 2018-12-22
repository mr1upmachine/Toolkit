import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';
import { AppNavComponent } from './app-nav/app-nav.component';

// https://stackoverflow.com/questions/41219439/angular2-global-guard-user-has-to-be-logged-in-always
const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: '',
    canActivate: [AuthGuard],
    component: AppNavComponent,
    children: [
      {
        path: '',
        redirectTo: 'player',
        pathMatch: 'full'
      },
      {
        path: 'player',
        loadChildren: './player/player.module#PlayerModule'
      },
      {
        path: 'settings',
        loadChildren: './settings/settings.module#SettingsModule'
      },
      {
        path: '**',
        redirectTo: 'player'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'auth'
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
