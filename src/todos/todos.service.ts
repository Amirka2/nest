import { Injectable } from '@nestjs/common';

@Injectable()
export class TodosService {
  todos = [];

  getTodos = () => {
    return this.todos;
  };

  createTodo = (todo: ICreateTodo) => {
    const id = this.todos.length;

    const newTodo: ITodo = {
      ...todo,
      id,
    };

    this.todos.push(newTodo);
  };
}
