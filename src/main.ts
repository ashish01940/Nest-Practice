import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  return NestFactory.create<NestExpressApplication>(AppModule);
}
bootstrap().then((app) => {
  app.listen(4000)
})
