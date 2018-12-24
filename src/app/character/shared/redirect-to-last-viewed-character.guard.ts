import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { CharacterService } from './character.service';

@Injectable({
  providedIn: 'root'
})
export class RedirectToLastViewedCharacterGuard implements CanActivate {
  firstLoad = true;

  constructor(
    private router: Router,
    private characterService: CharacterService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.characterService.getLastViewedCharacter().pipe(
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
