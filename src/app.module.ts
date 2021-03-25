import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlanningModule } from './planning/planning.module';
import { UserModule } from './user/user.module';
@Module({
  imports: [
    UserModule,
    PlanningModule,

    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'pypo',
      entities: [__dirname + '/**/**.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
