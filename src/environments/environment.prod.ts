import { OpenAPIObject } from '@nestjs/swagger';
import { IEnvironment } from './i.environment';

export const environment: IEnvironment = {
  production: true,
  swaggerInitializer: () => ({} as OpenAPIObject),
};
