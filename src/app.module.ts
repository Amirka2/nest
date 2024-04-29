import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TodosModule } from './todos/todos.module';
import { TodoModel } from './todos/dbModel/todos';

@Module({
  imports: [
    TodosModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'postgres',
      synchronize: true,
      autoLoadModels: true,
      models: [TodoModel],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
