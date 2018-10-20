export enum actions {
  ADD_TODO = 'AddTodo',
  DELETE_TODO = 'DeleteTodo',
  GET_TODOS = 'GetTodos'
}

export interface addTodoAction {
  type: actions.ADD_TODO;
  data: ITodo;
}

export interface deleteTodoAction {
  type: actions.DELETE_TODO;
  id: string;
}

export interface getTodosAction {
  type: actions.GET_TODOS;
}

export interface ITodo {
  [key: string]: string;
}

export interface ITodoList {
  Todos: Array<ITodo>;
}
