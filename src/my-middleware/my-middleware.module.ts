import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MyMiddlewareMiddleware } from 'src/my-middleware.middleware';
import { MyMiddlewareController } from './my-middleware.controller';
import { MyMiddlewareService } from './my-middleware.service';
import { RequestMethod } from '@nestjs/common';

@Module({
  controllers: [MyMiddlewareController],
  providers: [MyMiddlewareService],
})
export class MyMiddlewareModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(MyMiddlewareMiddleware)
      .exclude({ path: 'myMiddleware/2', method: RequestMethod.POST })
      .forRoutes(MyMiddlewareController);
  }
}
