import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as dotenv from 'dotenv';

//database
import { MongooseModule } from '@nestjs/mongoose';
//modules
import { foodModule } from './food/food.module';

//env
const process = dotenv.config().parsed;
// import { ConfigModule, ConfigService } from "@nestjs/config"
import { MyMiddlewareController } from './my-middleware/my-middleware.controller';
import { MyMiddlewareService } from './my-middleware/my-middleware.service';
import { MyMiddlewareModule } from './my-middleware/my-middleware.module';
import { MyMiddlewareMiddleware } from './my-middleware.middleware';
import { CircularImport1Controller } from './circular-import1/circular-import1.controller';
import { CircularImport1Service } from './circular-import1/circular-import1.service';
import { CircularImport1Module } from './circular-import1/circular-import1.module';
import { CircularImport2Controller } from './circular-import2/circular-import2.controller';
import { CircularImport2Service } from './circular-import2/circular-import2.service';
import { CircularImport2Module } from './circular-import2/circular-import2.module';
import { GuardsController } from './guards/guards.controller';
import { GuardsModule } from './guards/guards.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';

// console.log(ConfigService);

@Module({
  imports: [
    // ConfigModule.forRoot(), //by defalut look for single .env file
    // ConfigModule.forRoot({
    //   envFilePath: [".uat.env", ".dev.env"]
    // }),
    MongooseModule.forRoot(process.DatabseURL),
    foodModule,
    // MyMiddlewareModule,
    // CircularImport1Module,
    // CircularImport2Module,
    GuardsModule,
    AuthModule,
  ],
  controllers: [
    AppController,
    CircularImport1Controller,
    CircularImport2Controller,
    AuthController,
  ],
  providers: [AppService, CircularImport1Service, CircularImport2Service, AuthService],
})
export class AppModule {}
