import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { myPersonalGuard } from './guards';
import { JwtModule } from '@nestjs/jwt';
import * as dotenv from 'dotenv';
const process = dotenv.config().parsed;
// console.log(process);

@Module({
  providers: [AuthService, myPersonalGuard],
  controllers: [AuthController],
  exports: [myPersonalGuard],
  imports: [
    JwtModule.register({
      secret: process.Secret,
      signOptions: { expiresIn: '30s' },
    }),
  ],
})
export class AuthModule {}
