import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  signin(@Body() dto:AuthDto) {
    return this.authService.signin(dto);
  }

  @HttpCode(201)
  @Post('signup')
  signup(@Body() dto:AuthDto) {
    return this.authService.signup(dto);
  }
}
