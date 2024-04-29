import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { TodoModel } from './dbModel/todos';
import { Todo } from './model/todos';
import { CreateTodo } from './model/todos';

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

  editTodo = (todo: Todo) => {
    return this.todoModel.update(todo, {
      where: {
        id: todo.id,
      },
    });
  };

  toggleTodo = async (id: number) => {
    const todo = await this.todoModel.findOne({
      where: {
        id,
      },
    });

    const newTodo = {
      ...todo,
      isChecked: !todo.isChecked,
    };

    return this.todoModel.update(newTodo, {
      where: {
        id,
      },
    });
  };

  deleteTodo = (id: number) => {
    return this.todoModel.destroy({
      where: {
        id,
      },
    });
  };
}
