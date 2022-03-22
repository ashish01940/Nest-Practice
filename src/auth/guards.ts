import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class myPersonalGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    let rrn = context.switchToHttp();
    console.log(rrn['contextType']);
    console.log(rrn.getRequest().headers);
    return true;
  }
}