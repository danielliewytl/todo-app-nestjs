import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResponse } from './auth.types';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  getHello(): AuthResponse {
    return this.authService.signin();
  }
}
