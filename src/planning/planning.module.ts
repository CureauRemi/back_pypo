import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
// import { UserService } from 'src/user/user.service';
import { Category } from './category.entity';
import { PlanningController } from './planning.controller';
import { Planning } from './planning.entity';
import { PlanningService } from './planning.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Category, Planning, User]),
  ],
  controllers: [PlanningController],
  providers: [PlanningService, UserService]
})
export class PlanningModule {}
