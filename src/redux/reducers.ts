import { actions, IState, TodoActions } from './types';

const initialState: IState = [] as any;

const reducer = (state: IState = initialState, action: TodoActions) => {
  switch (action.type) {
    case actions.GET_TODOS:
      return {
        ...state
      };
    case actions.ADD_TODO:
      return {
        ...state
      };
    case actions.DELETE_TODO:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default reducer;
