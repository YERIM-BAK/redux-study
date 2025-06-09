import { connect } from "react-redux";
import { addTodoActionCreator, removeTodoActionCreator, removeAllTodoActionCreator } from "../actions";
import TodoApp from "../../components/TodoApp";

function mapStateToProps(state, ownProps) {
  return {
    todoItems: state.todo
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    addTodo: (text) => {
      dispatch(addTodoActionCreator(text));
    },
    removeTodo: () => {
      dispatch(removeTodoActionCreator());
    },
    removeAll: () => {
      dispatch(removeAllTodoActionCreator());
    },
  }
}

const TodoAppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp);

export default TodoAppContainer;