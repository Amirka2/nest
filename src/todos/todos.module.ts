import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import { TodoModel } from './dto/todos';

@Module({
  imports: [SequelizeModule.forFeature([TodoModel])],
  controllers: [TodosController],
  providers: [TodosService],
})
export class TodosModule {}
