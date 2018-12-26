// Angular
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';

// Rxjs
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { CharacterService } from './character.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterExistsGuard implements CanActivate {

  constructor(
    private router: Router,
    private characterService: CharacterService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.redirectfEmpty(next.params.id) && this.characterService.getCharacterData$(next.params.id).pipe(
      tap(charExists => {
        if (!charExists) {
          this.router.navigate(['/characters']);
        }
      }),
      map(charToBool => !!charToBool)
    );
  }

  private redirectfEmpty(id: string): boolean {
    if (id && id !== '') {
      return true;
    } else {
      this.router.navigate(['/characters']);
      return false;
    }
  }
}
