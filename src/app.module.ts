import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlanningModule } from './planning/planning.module';
import { UserModule } from './user/user.module';
@Module({
  imports: [
    UserModule,
    PlanningModule,

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'pypousr',
      password: 'Pyp0USer',
      database: 'pypo',
      entities: [__dirname + '/**/**.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
