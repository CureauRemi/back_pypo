import { NestFactory } from '@nestjs/core';
// import { setupAdminPanel } from './admin-panel/admin-panel.plugin';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(3000);
}
bootstrap();
