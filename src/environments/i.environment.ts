import { INestApplication } from '@nestjs/common';
import { OpenAPIObject } from '@nestjs/swagger';

export interface IEnvironment {
  production: boolean;
  swaggerInitializer: (app: INestApplication) => OpenAPIObject;
}
