import { forwardRef, Module } from '@nestjs/common';
import { CircularImport1Module } from 'src/circular-import1/circular-import1.module';
import { CircularImport2Controller } from './circular-import2.controller';
import { CircularImport2Service } from './circular-import2.service';

@Module({
  controllers: [CircularImport2Controller],
  providers: [CircularImport2Service],
  imports: [forwardRef(() => CircularImport1Module)],
  exports: [CircularImport2Service],
})
export class CircularImport2Module {}
