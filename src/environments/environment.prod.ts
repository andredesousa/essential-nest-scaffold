import { OpenAPIObject } from '@nestjs/swagger';
import { Environment } from './models';

export const environment: Environment = {
  production: true,
  swaggerInitializer: () => ({} as OpenAPIObject),
};
