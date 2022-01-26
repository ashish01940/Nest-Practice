import { Module } from '@nestjs/common';
import { FoodController } from './food.controller';
import { FoodService } from './food.service';
import { MongooseModule } from '@nestjs/mongoose';
import { foodschemaName, foodschema } from './schemas/foodSchemas';

@Module({
    imports: [MongooseModule.forFeature([{ name: foodschemaName, schema: foodschema }])],
    // exports: [MongooseModule.forFeature([{ name: "foodie", schema: foodschema }])],
    controllers: [FoodController],
    providers: [FoodService],
})
export class foodModule { }
