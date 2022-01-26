import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabseURL } from "./urls_keys"

//database
import { MongooseModule } from "@nestjs/mongoose";
//modules
import { foodModule } from "./food/food.module"

@Module({
  imports: [
    foodModule,
    MongooseModule.forRoot(DatabseURL)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
