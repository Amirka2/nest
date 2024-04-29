export interface Todo {
  id: number;
  text: string;
  isChecked: boolean;
}

export interface CreateTodo {
  text: string;
  isChecked: boolean;
}
