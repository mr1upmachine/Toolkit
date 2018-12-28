import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { CharacterApiService } from './character-api.service';

@Injectable({
  providedIn: 'root'
})
export class RedirectToLastViewedCharacterGuard implements CanActivate {
  firstLoad = true;

  constructor(
    private router: Router,
    private characterApiService: CharacterApiService
  ) { }

  // TODO: BUG if you load into a detaill view first, it ignores first attempt to navigate to /characters/list
  // FIX is to have firstLoad be defined in a service and not this guard, and set after first load of char module
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.characterApiService.getLastViewedCharacter().pipe(
      tap(lastViewedCharacter => {
        if (this.firstLoad && lastViewedCharacter) {
          this.firstLoad = false;
          this.router.navigate([`/characters/detail/${lastViewedCharacter.id}`]);
        }
      }),
      map(() => true)
    );
  }
}
