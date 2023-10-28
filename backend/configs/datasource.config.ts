import { DataSource } from 'typeorm';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

import { BASE_OPTIONS } from './';

export const DATA_SOURCE_CONFIG = new DataSource(BASE_OPTIONS as MysqlConnectionOptions);
