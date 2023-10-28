import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { BASE_OPTIONS } from './';

export const TYPE_ORM_CONFIG: TypeOrmModuleOptions = BASE_OPTIONS as TypeOrmModuleOptions;
