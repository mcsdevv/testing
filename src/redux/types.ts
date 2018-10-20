export enum actions {
  ADD_TODO = 'AddTodo',
  DELETE_TODO = 'DeleteTodo',
  GET_TODOS = 'GetTodos'
}

export type TodoActions = addTodoAction | deleteTodoAction | getTodosAction;

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
  id: string;
  todo: string;
  done: boolean;
}

export interface ITodoList {
  todos: Array<ITodo>;
}

export interface State {
  todos: ITodoList;
}
