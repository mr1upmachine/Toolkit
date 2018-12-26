import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { CharacterExistsGuard } from './shared/character-exists.guard';
import { RedirectToLastViewedCharacterGuard } from './shared/redirect-to-last-viewed-character.guard';

const routes: Routes = [
  // TODO: validate if detail path exists with guard
  {
    path: 'detail',
    loadChildren: './character-detail/character-detail.module#CharacterDetailModule'
  },
  {
    path: 'list',
    canActivate: [RedirectToLastViewedCharacterGuard],
    loadChildren: './character-list/character-list.module#CharacterListModule'
  },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule { }
