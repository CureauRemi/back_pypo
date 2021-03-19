import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from 'src/user/user.service';
import { PlanningService } from './planning.service';

@ApiTags('Planning')
@Controller('planning')
export class PlanningController {
  constructor(
    private readonly planningService: PlanningService,
    private readonly userService: UserService,
  ) {}

  @Get('user/:id')
  async getAllScheduleForOneUser(@Param('id') id: string) {
    const user = await this.userService.getOneById(id);
    return this.planningService.getAllOfOneUser(user);
  }

  @Post('user/:id')
  async createScheduleForOneUser(@Param('id') id: string) {
    const user = await this.userService.getOneById(id);
    return this.planningService.getAllOfOneUser(user);
  }

  @Put('user/:id')
  async updateScheduleForOneUser(@Param('id') id: string) {
    const user = await this.userService.getOneById(id);
    return this.planningService.getAllOfOneUser(user);
  }

  @Delete('user/:id/:idplanning')
  async deleteOneeventForOneUser(
    @Param('id') id: string,
    @Param('idplanning') idplanning: string,
  ) {
    const user = await this.userService.getOneById(id);
    const event = await this.planningService.getOneEventOfOneUser(
      user,
      idplanning,
    );
    return this.planningService.deleteEventInPlanning(event.id);
  }
}
