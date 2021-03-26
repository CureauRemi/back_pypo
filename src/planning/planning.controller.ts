import { Body,Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from 'src/user/user.service';
import { PlanningService } from './planning.service';
import { CategoryService } from './category.service';
import { Planning } from './planning.entity';
import { Category } from './category.entity';

@ApiTags('Planning')
@Controller('planning')
export class PlanningController {
  constructor(
    private readonly planningService: PlanningService,
    private readonly categoryService: CategoryService,
    private readonly userService: UserService,
  ) {}
  @Get()
  getAll() {
    return this.planningService.getAll();
  }
  @Get('category')
  getAllCategorie() {
    return this.categoryService.getAllCategorie();
  }

  @Get('user/:id')
  async getAllScheduleForOneUser(@Param('id') id: string) {
    const user = await this.userService.getOneById(id);
    return this.planningService.getAllOfOneUser(user);
  }
  
  @Post('user')
  async createScheduleForOneUser(@Body() planning: Planning) {
    return this.planningService.createEventInPlanning(planning);
  }
  
  @Post('category')
  async createCategory(@Body() category: Category) {
    return this.categoryService.createCategoryinCategory(category);
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
