import {CanActivateFn} from '@angular/router';

export const gurdsGuard: CanActivateFn = (route, state): boolean => {
  return localStorage.getItem('авторизован') !== '';
};



export const GuardAuth: CanActivateFn = (route, state): boolean => {
  return localStorage.getItem('авторизован') === '';
};
