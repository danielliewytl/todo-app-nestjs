import { Injectable } from '@nestjs/common';
import { AuthResponse } from './auth.types';

@Injectable()
export class AuthService {
  signin(): AuthResponse {
    return {
      success: true,
      msg: 'Login Successful',
      token: 'asdf1234',
    };
  }
}
