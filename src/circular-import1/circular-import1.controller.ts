import { Controller, Get } from '@nestjs/common';
import { CircularImport1Service } from './circular-import1.service';

@Controller('circular-import1')
export class CircularImport1Controller {
  constructor(

    private readonly ci: CircularImport1Service,
  ) {}

  @Get('/cib1')
  async cib1() {
    let data = await this.ci.cib1();
    return data;
  }
}
