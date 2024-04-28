import { Body, Controller, Get, Post } from "@nestjs/common";

import { TodosService } from "./todos.service";

@Controller('/todos')
export class TodosController {
  constructor(private service: TodosService) {
  }

  @Get('/')
  getTodos() {
    return this.service.getTodos();
  }

  @Post('/')
  createTodo(@Body() data: ICreateTodo) {
    return this.service.createTodo(data);
  }
}
