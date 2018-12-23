import { Injectable, TemplateRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppNavService {
  private toolbarCustomTitle$ = new BehaviorSubject<string>(null);
  private toolbarActions$ = new BehaviorSubject<TemplateRef<any>>(null);
  private toolbarActionMenu$ = new BehaviorSubject<TemplateRef<any>>(null);

  resetToolbar(): void {
    this.clearToolbarTitle();
    this.clearToolbarActions();
  }

  setToolbarTitle(title: string): void {
    this.toolbarCustomTitle$.next(title);
  }

  getToolbarTitle$(): BehaviorSubject<string> {
    return this.toolbarCustomTitle$;
  }

  clearToolbarTitle(): void {
    this.setToolbarTitle(null);
  }

  setToolbarActions(actionsRef: TemplateRef<any>): void {
    this.toolbarActions$.next(actionsRef);
  }

  getToolbarActions$(): BehaviorSubject<TemplateRef<any>> {
    return this.toolbarActions$;
  }

  clearToolbarActions(): void {
    this.setToolbarActions(null);
  }

  setToolbarActionMenu(actionMenuRef: TemplateRef<any>): void {
    this.toolbarActionMenu$.next(actionMenuRef);
  }

  getToolbarActionMenu$(): BehaviorSubject<TemplateRef<any>> {
    return this.toolbarActionMenu$;
  }

  clearToolbarActionMenu(): void {
    this.setToolbarActionMenu(null);
  }
}
