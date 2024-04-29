import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { TodosService } from './todos.service';
import { CreateTodo, Todo } from './model/todos';

@Controller('/todos')
export class TodosController {
  constructor(private service: TodosService) {}

  @Get('/')
  getTodos() {
    return this.service.getTodos();
  }

  @Post('/')
  createTodo(@Body() data: CreateTodo) {
    return this.service.createTodo(data);
  }

  @Patch('/')
  editTodo(@Body() data: Todo) {
    return this.service.editTodo(data);
  }

  @Post('/:id/toggle')
  toggleTodo(@Param('id') id: number) {
    return this.service.toggleTodo(id);
  }

  @Delete('/:id')
  deleteTodo(@Param('id') id: number) {
    return this.service.deleteTodo(id);
  }
}
