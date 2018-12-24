import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  fbUser$ = this.afAuth.authState;
  currentFbUser: firebase.User;

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth
  ) {
    this.fbUser$.subscribe(user => {
      this.currentFbUser = user;
    });
  }

  loginWithGoogle(): void {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(() => {
      this.router.navigate(['/characters']);
    });
  }

  logout(): void {
    this.afAuth.auth.signOut();
  }
}
