import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FoodController } from './food/food.controller';

@Module({
  imports: [],
  controllers: [AppController, FoodController],
  providers: [AppService],
})
export class AppModule {}
