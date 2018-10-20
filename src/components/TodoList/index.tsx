import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as TodoActions from '../../redux/actions';
import { IState, ITodoList } from '../../redux/types';

// import Todo from '../Todo';

export interface ITodoListMapProps {
  todos: ITodoList;
}

export interface ITodoListDispatchProps {
  getTodos: () => void;
}

export interface ITodoListProps
  extends ITodoListMapProps,
    ITodoListDispatchProps {}

class TodoList extends React.Component<ITodoListProps> {
  public componentDidMount() {
    this.props.getTodos();
    alert('dispatched');
  }
  public render() {
    return (
      <div className="App">
        <p>I am the todolist.</p>
      </div>
    );
  }
}

const mapStateToProps = (state: IState): ITodoListMapProps => ({
  todos: state.todos
});

const mapDispatchToProps = (dispatch: Dispatch): ITodoListDispatchProps => ({
  getTodos: () => dispatch(TodoActions.getTodos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
