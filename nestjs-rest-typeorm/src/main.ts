import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, InternalServerErrorException } from '@nestjs/common';
import helmet from "helmet"
import bodyParser from 'body-parser';
import rateLimit from 'express-rate-limit';

import { NODE_ENV, DOMAIN, PORT } from './environments';

declare const module: any

async function bootstrap() {

  // try {
  const app = await NestFactory.create(AppModule, {
    cors: true
  })
  app.use(helmet());

  // app.use(bodyParser.json())
  // app.use(bodyParser.urlencoded())

  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 10000
    })
  )

  // const httpAdapter = app.getHttpAdapter()

  app.setGlobalPrefix("/1")

  await app.listen(PORT!)

  // await app.listen(3000);
  // }
}
bootstrap().catch(e => {
  throw e
});
