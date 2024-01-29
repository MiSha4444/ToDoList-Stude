import { CanActivateFn} from '@angular/router';

export const gurdsGuard: CanActivateFn = (): boolean => {
  return localStorage.getItem('авторизован') !== '';
};



export const GuardAuth: CanActivateFn = (): boolean => {
  return localStorage.getItem('авторизован') === '';
};
