import { Controller, forwardRef, Get, Inject,Injectable } from '@nestjs/common';
import { CircularImport1Service } from 'src/circular-import1/circular-import1.service';

@Injectable()
export class CircularImport2Service {
  constructor(@Inject(forwardRef(() => CircularImport1Service)) private readonly ci1: CircularImport1Service) {}

  async c2() {
    let data = this.ci1.ci1();
    return data;
  }
  async cb2() {
    return 'this is c2';
  }
}
