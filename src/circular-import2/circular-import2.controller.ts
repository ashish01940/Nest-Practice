import { Controller, forwardRef, Get, Inject } from '@nestjs/common';
import { CircularImport1Service } from 'src/circular-import1/circular-import1.service';
import { CircularImport2Service } from './circular-import2.service';

@Controller('circular-import2')
export class CircularImport2Controller {
  constructor(
    
    private readonly ci: CircularImport2Service) {}

  @Get('/ci2')
  async ci1() {
    let data = await this.ci.c2();
    return data;
  }
}
