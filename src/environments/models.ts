import { INestApplication } from '@nestjs/common';
import { OpenAPIObject } from '@nestjs/swagger';

export interface Environment {
  production: boolean;
  swaggerInitializer: (app: INestApplication) => OpenAPIObject;
}
