import { Body, Injectable } from '@nestjs/common';
import { AuthDto } from './dto';

@Injectable()
export class AuthService {
  signin() {
    return 'signin';
  }

  signup(@Body() dto:AuthDto) {
    return 'signup';
  }
}
