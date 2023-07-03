import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";

import { AppModule } from "./app/app.module";

const hostname = 'localhost';
const port = '3333';
const globalPrefix = 'api/v1';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.setGlobalPrefix(globalPrefix);

  app.enableCors({
    origin: true,
    credentials: false,
  });

  app.enableShutdownHooks();

  const server = await app.listen(port, hostname);

  Logger.log(`🚀 Running application`);
}
bootstrap();


