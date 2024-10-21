import { HttpInterceptorFn } from '@angular/common/http';
import { TokenService } from '../services/token/token.service';
import { inject } from '@angular/core';

export const customInterceptor: HttpInterceptorFn = (req, next) => {
  var tokenService=inject(TokenService)
  const token= tokenService.getToken();
  const cloneRequest = req.clone({
    setHeaders:{
      Authorization :`Bearer ${token}`
    }
  })
  return next(cloneRequest);
};
