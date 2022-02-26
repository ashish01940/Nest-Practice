import { Injectable } from '@nestjs/common';

@Injectable()
export class MyMiddlewareService {
  constructor() {}

  async getThisData(): Promise<String> {
    return 'this ran';
  }
}
