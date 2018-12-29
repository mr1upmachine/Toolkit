import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  fbUser$ = this.afAuth.authState;
  currentFbUser: firebase.User;
  dbCurrentUser: AngularFirestoreDocument;

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private db: AngularFirestore
  ) {
    this.fbUser$.subscribe(user => {
      this.currentFbUser = user;
      if (user) {
        this.dbCurrentUser = this.db.doc(`/users/${user.uid}`);
      }
    });
  }

  loginWithGoogle(): void {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(fbUserCred => {
      if (fbUserCred.additionalUserInfo.isNewUser) {
        this.db.doc(`/users/${fbUserCred.user.uid}`).set({
          name: fbUserCred.user.displayName,
          uid: fbUserCred.user.uid
        });
      }
      this.router.navigate(['/characters']);
    });
  }

  logout(): void {
    this.afAuth.auth.signOut();
  }
}
