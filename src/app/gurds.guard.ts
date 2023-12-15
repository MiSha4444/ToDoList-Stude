import {CanActivateFn} from '@angular/router';

export const gurdsGuard: CanActivateFn = (route, state) => {
    return  localStorage.getItem('авторизован') !== '';
};
