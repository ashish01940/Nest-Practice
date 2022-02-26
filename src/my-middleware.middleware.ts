import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class MyMiddlewareMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    req.body.comment = `Middleware Returning a switch number ${req.body.switch}`;
    next();
  }
}
