import { Injectable, TemplateRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppNavService {
  private toolbarCustomTitle$: BehaviorSubject<string>;
  private toolbarActions$: BehaviorSubject<TemplateRef<any>>;

  resetToolbar(): void {
    this.clearToolbarTitle();
    this.clearToolbarActions();
  }

  setToolbarTitle(title: string): void {
    if (this.initToolbarTitle(title)) {
      this.toolbarCustomTitle$.next(title);
    }
  }

  getToolbarTitle$(): BehaviorSubject<string> {
    this.initToolbarTitle();
    return this.toolbarCustomTitle$;
  }

  clearToolbarTitle(): void {
    this.setToolbarTitle(null);
  }

  private initToolbarTitle(actionsRef: string = null): boolean {
    if (this.toolbarCustomTitle$) {
      return true;
    }

    this.toolbarCustomTitle$ = new BehaviorSubject(actionsRef);
    return false;
  }

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
