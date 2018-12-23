import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material
import {
  MatRippleModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';

// Font Awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Firestore
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppNavComponent } from './app-nav/app-nav.component';
import { AppNavService } from './app-nav/app-nav.service';

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,

    MatRippleModule,
    MatTabsModule,
    MatToolbarModule,

    FontAwesomeModule,

    AppRoutingModule,
    SharedModule
  ],
  providers: [
    AppNavService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
