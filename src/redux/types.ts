export enum actions {
  ADD_TODO = 'AddTodo',
  DELETE_TODO = 'DeleteTodo',
  GET_TODOS = 'GetTodos'
}

export type TodoActions = IAddTodoAction | IDeleteTodoAction | IGetTodosAction;

export interface IAddTodoAction {
  type: actions.ADD_TODO;
  data: ITodo;
}

export interface IDeleteTodoAction {
  type: actions.DELETE_TODO;
  id: string;
}

export interface IGetTodosAction {
  type: actions.GET_TODOS;
}

export interface ITodo {
  id: string;
  todo: string;
  done: boolean;
}

export interface ITodoList {
  todos: ITodo[];
}

export interface IState {
  todos: ITodoList;
}
