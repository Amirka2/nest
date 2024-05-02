export interface Todo {
  id: number;
  text: string;
  description?: string;
  isChecked: boolean;
}

export interface CreateTodo {
  text: string;
  description?: string;
  isChecked: boolean;
}
