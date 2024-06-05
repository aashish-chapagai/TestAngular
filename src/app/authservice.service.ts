import { Injectable, inject } from '@angular/core';
import { auth } from './firebase.config';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  private router = inject(Router)
  isLoggedIn = false
  loggedInUser: any = null
  register(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        this.router.navigate(['login'])
      })
      .catch(error => {
        alert("User Already Exists. Please Login.")
        console.log(error)
      });
  }
  login(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        this.loggedInUser = userCredential
        console.log(this.loggedInUser)
        this.isLoggedIn = true
        this.router.navigate(['home'])
      })
      .catch(error => {
        console.log(error)
        alert("Invalid Credentials.")
        this.isLoggedIn = false
      })
  }
  logout() {
    return signOut(auth)
      .then(() => {
        this.isLoggedIn = false
        this.router.navigate(['login'])
      })
      .catch(error => {
        this.isLoggedIn = true
        console.log(error)
      });
  } 
}