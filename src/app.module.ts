import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import * as process from 'process';

import { TodosModule } from './todos/todos.module';
import { TodoModel } from './todos/dbModel/todos';

@Module({
  imports: [
    TodosModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DBNAME,
      synchronize: true,
      autoLoadModels: true,
      models: [TodoModel],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
