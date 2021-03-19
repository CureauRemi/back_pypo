import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
// import { setupAdminPanel } from './admin-panel/admin-panel.plugin';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const options = new DocumentBuilder()
    .setTitle('API Portfolio')
    .setDescription("L'API de mon portfolio !")
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  // Pour visualiser les routes
  SwaggerModule.setup('/docs', app, document);

  await app.listen(3000);
}
bootstrap();
