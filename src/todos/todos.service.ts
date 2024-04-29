import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { TodoModel } from './dto/todos';
import { Todo } from './interface/todos';
import { CreateTodo } from './interface/todos';

@Injectable()
export class TodosService {
  constructor(
    @InjectModel(TodoModel)
    private todoModel: typeof TodoModel,
  ) {}

  getTodos = () => {
    return this.todoModel.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });
  };

  createTodo = (todo: CreateTodo): Promise<Todo> => {
    return this.todoModel.create(todo);
  };
}
