import { forwardRef, Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { GuardsController } from './guards.controller';
import { GuardsService } from './guards.service';

@Module({
  providers: [GuardsService],
  controllers: [GuardsController],
  imports: [forwardRef(() => AuthModule)],
})
export class GuardsModule {}
