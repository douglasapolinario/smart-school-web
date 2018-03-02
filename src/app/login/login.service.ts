import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  getByEmailPassword(email: string, password: string): Promise<boolean> {
    if (email === 'douglas' && password === '123') {
      return Promise.resolve(true);
    } else {
      return Promise.reject(false);
    }
  }

}
