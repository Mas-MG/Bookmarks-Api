import { Injectable } from '@nestjs/common';
import { AuthDto } from './dto';

@Injectable()
export class AuthService {
  signin() {
    return 'signin';
  }

  signup(dto:AuthDto) {
    return 'signup';
  }
}
