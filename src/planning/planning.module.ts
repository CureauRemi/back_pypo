import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
// import { UserService } from 'src/user/user.service';
import { Category } from './category.entity';
import { PlanningController } from './planning.controller';
import { Planning } from './planning.entity';
import { PlanningService } from './planning.service';
import { CategoryService } from './category.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Category, Planning, User]),
  ],
  controllers: [PlanningController],
  providers: [PlanningService, UserService, CategoryService]
})
export class PlanningModule {}
