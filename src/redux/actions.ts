import {
  actions,
  IAddTodoAction,
  IDeleteTodoAction,
  IGetTodosAction,
  ITodo
} from './types';

export const getTodos = (): IGetTodosAction => ({
  type: actions.GET_TODOS
});

export const addTodo = (data: ITodo): IAddTodoAction => ({
  data,
  type: actions.ADD_TODO
});

export const deleteTodo = (id: string): IDeleteTodoAction => ({
  id,
  type: actions.DELETE_TODO
});
