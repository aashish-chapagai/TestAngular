import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './authservice.service';

export const authguardGuard: CanActivateFn = (route, state) => {
    const router = inject(Router)
    const authService = inject(AuthService)
    const isLoggedIn = authService.isLoggedIn
    if (isLoggedIn) {
        return true
    } else {
        alert("Please login to access this page.")
        router.navigate(['login'])
        return false
    }
};
