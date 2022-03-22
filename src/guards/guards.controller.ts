import { Controller, Get, HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { myPersonalGuard } from 'src/auth/guards';
import { GuardsService } from './guards.service';

@Controller('guards')
export class GuardsController {
  constructor(private guardServive: GuardsService) {}

  @Get('/myDetails')
  @UseGuards(myPersonalGuard)
  async getMyDetails() {
    return new HttpException(
      { data: 'this is a confidential Information!' },
      HttpStatus.OK,
    );
  }
}
