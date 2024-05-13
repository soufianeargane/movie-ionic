import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Storage } from '@ionic/storage';

// let router: Router;

// export const authGuardGuard: CanActivateFn = async (route, state) => {
//   const storage = new Storage();
//   await storage.create();
//   const user = await storage.get('user');
//   if (!user) {
//     router.navigateByUrl('/login');
//     return false;
//   }

//   return true;
// };

// export function setRouter(r: Router) {
//   router = r;
// }
@Injectable({
  providedIn: 'root',
})
class authGuardGuard {
  constructor(private router: Router, private storage: Storage) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return true;
  }
}

export const AuthGuard: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean => {
  return inject(authGuardGuard).canActivate(next, state);
};
