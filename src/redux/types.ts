export interface ITodo {
  [key: string]: string;
}

export interface ITodoList {
  Todos: Array<ITodo>;
}
