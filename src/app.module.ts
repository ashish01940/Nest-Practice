import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as dotenv from "dotenv";


//database
import { MongooseModule } from "@nestjs/mongoose";
//modules
import { foodModule } from "./food/food.module"

//env 
const process = dotenv.config().parsed;
// import { ConfigModule, ConfigService } from "@nestjs/config"
import { MyMiddlewareController } from './my-middleware/my-middleware.controller';
import { MyMiddlewareService } from './my-middleware/my-middleware.service';
import { MyMiddlewareModule } from './my-middleware/my-middleware.module';
import { MyMiddlewareMiddleware } from './my-middleware.middleware';


// console.log(ConfigService);



@Module(
  {
    imports: [
      foodModule,
      // ConfigModule.forRoot(), //by defalut look for single .env file
      // ConfigModule.forRoot({
      //   envFilePath: [".uat.env", ".dev.env"]
      // }),
      MongooseModule.forRoot(process.DatabseURL),
      MyMiddlewareModule
    ],
    controllers: [AppController],
    providers: [AppService],
  }
)
export class AppModule{}
