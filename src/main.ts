import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { json } from "express"

async function bootstrap() {
  return NestFactory.create<NestExpressApplication>(AppModule);
}
bootstrap().then((app) => {
  // app.useGlobalPipes(new ValidationPipe({
  //   disableErrorMessages: false,
  //   whitelist: true
  // }))
  // app.use(json())
  app.listen(4000)
})
