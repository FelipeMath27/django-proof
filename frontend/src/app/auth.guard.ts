import { Injectable, inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "./auth.service";
import Client from "./interfaces/Client";


@Injectable({
    providedIn: 'root'
})

export class AuthGuard {

    client : any;
    constructor(private authService: AuthService, private router: Router) {}
  
    canActivate: CanActivateFn = (route, state) => {
      const authService = inject(AuthService);
      const router = inject(Router);
  
      if (authService.signInClient(this.client)) {
        return true;
      } else {
        router.navigate(['/client-login']);
        return false;
      }
    };
  }