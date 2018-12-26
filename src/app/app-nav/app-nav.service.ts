import { Injectable, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
import { IToolbarMenuItem } from './app-nav.types';

@Injectable({
  providedIn: 'root'
})
export class AppNavService {
  private toolbarCustomTitle$ = new Subject<string>();
  private toolbarActions$ = new Subject<TemplateRef<any>>();
  private toolbarActionMenu$ = new Subject<IToolbarMenuItem[]>();

  resetToolbar(): void {
    this.clearToolbarTitle();
    this.clearToolbarActions();
    this.clearToolbarActionMenu();
  }

  setToolbarTitle(title: string): void {
    this.toolbarCustomTitle$.next(title);
  }

  // To be used by app-nav.service.ts only
  getToolbarTitle$(): Subject<string> {
    return this.toolbarCustomTitle$;
  }

  clearToolbarTitle(): void {
    this.setToolbarTitle(null);
  }

  setToolbarActions(actionsRef: TemplateRef<any>): void {
    this.toolbarActions$.next(actionsRef);
  }

  // To be used by app-nav.service.ts only
  getToolbarActions$(): Subject<TemplateRef<any>> {
    return this.toolbarActions$;
  }

  clearToolbarActions(): void {
    this.setToolbarActions(null);
  }

  setToolbarActionMenu(actionMenuRef: IToolbarMenuItem[]): void {
    this.toolbarActionMenu$.next(actionMenuRef);
  }

  // To be used by app-nav.service.ts only
  getToolbarActionMenu$(): Subject<IToolbarMenuItem[]> {
    return this.toolbarActionMenu$;
  }

  clearToolbarActionMenu(): void {
    this.setToolbarActionMenu(null);
  }
}
