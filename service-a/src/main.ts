import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from "@nestjs/microservices";
import { Logger } from '@nestjs/common';

const logger = new Logger()
async function bootstrap() {
  const transport = {
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: 8888
    }
  }
  const app = await NestFactory.createMicroservice(AppModule, transport);

  await app.listen(() => logger.log("microservice A is listening"));
}
bootstrap();
