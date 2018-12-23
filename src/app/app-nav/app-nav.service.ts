import { Injectable, TemplateRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppNavService {
  private toolbarActions$: BehaviorSubject<TemplateRef<any>>;

  setToolbarActions(actionsRef: TemplateRef<any>): void {
    if (this.initToolbarActions(actionsRef)) {
      this.toolbarActions$.next(actionsRef);
    }
  }

  getToolbarActions$(): BehaviorSubject<TemplateRef<any>> {
    this.initToolbarActions();
    return this.toolbarActions$;
  }

  clearToolbarActions(): void {
    this.setToolbarActions(null);
  }

  private initToolbarActions(actionsRef: TemplateRef<any> = null): boolean {
    if (this.toolbarActions$) {
      return true;
    }

    this.toolbarActions$ = new BehaviorSubject(actionsRef);
    return false;
  }
}
