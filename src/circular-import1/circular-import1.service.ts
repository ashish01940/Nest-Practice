import { Injectable,forwardRef, Inject  } from '@nestjs/common';
import { CircularImport2Service } from 'src/circular-import2/circular-import2.service';



@Injectable()
export class CircularImport1Service {
  constructor(@Inject(forwardRef(() => CircularImport1Service)) private readonly ci2: CircularImport2Service) {}

  async ci1() {
    return 'this is c1';
  }
  async cib1() {
    let data = this.ci2.cb2();
    return data;
  }
}
