import {
  actions,
  addTodoAction,
  deleteTodoAction,
  getTodosAction,
  ITodo
} from './types';

export const getTodos = (): getTodosAction => ({
  type: actions.GET_TODOS
});

export const addTodo = (data: ITodo): addTodoAction => ({
  type: actions.ADD_TODO,
  data
});

export const deleteTodo = (id: string): deleteTodoAction => ({
  type: actions.DELETE_TODO,
  id
});
