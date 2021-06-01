import { NestFactory } from '@nestjs/core';
import * as helmet from 'helmet';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  if (!environment.production) {
    environment.swaggerInitializer(app);
  }

  app.use(helmet());
  app.enableCors();

  await app.listen(3000);
}

bootstrap();
