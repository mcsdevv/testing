import { actions, State, TodoActions } from './types';

const initialState: State = [] as any;

const reducer = (state: State = initialState, action: TodoActions) => {
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
