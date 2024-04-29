import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { TodoModel } from './dbModel/todos';
import { CreateTodo, Todo } from './model/todos';

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

  editTodo = async (todo: Todo) => {
    const options = {
      where: {
        id: todo.id,
      },
    };

    await this.todoModel.update(todo, options);

    return this.todoModel.findOne(options);
  };

  toggleTodo = async (id: number) => {
    const options = {
      where: {
        id,
      },
    };

    const todo = await this.todoModel.findOne(options);

    const newTodo = {
      ...todo,
      isChecked: !todo.isChecked,
    };

    await this.todoModel.update(newTodo, options);

    return this.todoModel.findOne(options);
  };

  deleteTodo = async (id: number) => {
    const options = {
      where: {
        id,
      },
    };

    const result = await this.todoModel.destroy(options);

    if (result > 0) {
      return {
        success: true,
      };
    }

    return {
      success: false,
    };
  };
}
