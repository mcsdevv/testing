import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ITodoList, State } from '../../redux/types';
import * as TodoActions from '../../redux/actions';

// import Todo from '../Todo';

export interface TodoListMapProps {
  todos: ITodoList;
}

export interface TodoListDispatchProps {
  getTodos: () => void;
}

export interface TodoListProps
  extends TodoListMapProps,
    TodoListDispatchProps {}

class TodoList extends React.Component<TodoListProps> {
  componentDidMount() {
    this.props.getTodos();
  }
  public render() {
    return (
      <div className="App">
        <p>I am the todolist.</p>
      </div>
    );
  }
}

const mapStateToProps = (state: State): TodoListMapProps => ({
  todos: state.todos
});

const mapDispatchToProps = (dispatch: Dispatch): TodoListDispatchProps => ({
  getTodos: () => dispatch(TodoActions.getTodos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
