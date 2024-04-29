import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import * as process from 'process';

import { TodosModule } from './todos';
import { sequelizeConfig } from './configs';

@Module({
  imports: [
    TodosModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    SequelizeModule.forRoot({
      ...sequelizeConfig,
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DBNAME,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
