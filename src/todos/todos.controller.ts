import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import {
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
  OmitType,
} from '@nestjs/swagger';

import { CreateTodo, Todo } from './model/todos';
import { TodoModel } from './dbModel/todos';
import { TodosService } from './todos.service';

@ApiTags('TODO')
@Controller('/todos')
export class TodosController {
  constructor(private service: TodosService) {}

  @ApiOperation({ summary: 'Получение всех туду' })
  @ApiResponse({ status: 200, type: [TodoModel] })
  @Get('/')
  getTodos() {
    return this.service.getTodos();
  }

  @ApiOperation({ summary: 'Создание туду' })
  @ApiBody({ type: OmitType(TodoModel, ['id']) })
  @ApiResponse({ status: 200, type: TodoModel })
  @Post('/')
  createTodo(@Body() data: CreateTodo) {
    return this.service.createTodo(data);
  }

  @ApiOperation({ summary: 'Редактирование туду' })
  @ApiBody({ type: TodoModel })
  @ApiResponse({ status: 200, type: TodoModel })
  @Patch('/')
  editTodo(@Body() data: Todo) {
    return this.service.editTodo(data);
  }

  @ApiOperation({ summary: 'Переключение флага туду' })
  @ApiResponse({ status: 200, type: TodoModel })
  @Post('/:id/toggle')
  toggleTodo(@Param('id') id: number) {
    return this.service.toggleTodo(id);
  }

  @ApiOperation({ summary: 'Удаление туду' })
  @ApiResponse({ status: 200 })
  @Delete('/:id')
  deleteTodo(@Param('id') id: number) {
    return this.service.deleteTodo(id);
  }
}
