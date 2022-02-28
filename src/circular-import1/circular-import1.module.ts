import { forwardRef, Module } from '@nestjs/common';
import { CircularImport2Module } from 'src/circular-import2/circular-import2.module';
import { CircularImport1Controller } from './circular-import1.controller';
import { CircularImport1Service } from './circular-import1.service';

@Module({
  controllers: [CircularImport1Controller],
  providers: [CircularImport1Service],
  imports: [forwardRef(() => CircularImport2Module)],
  exports: [CircularImport1Service],
})
export class CircularImport1Module {}
