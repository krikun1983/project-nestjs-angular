import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TYPE_ORM_CONFIG } from '../configs';

@Module({
  imports: [TypeOrmModule.forRoot(TYPE_ORM_CONFIG)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
