import { connect } from "react-redux"
// import { addTodoActionCreator, removeTodoActionCreator, removeAllTodoActionCreator } from "../actions";
// import { addTodoActionCreator, removeTodoActionCreator, removeAllTodoActionCreator } from "../ducks/todoDuck";
import {
  addTodo as addTodoActionCreator,
  removeTodo as removeTodoActionCreator,
  removeAll as removeAllTodoActionCreator,
} from "../actions/todoAction"
import { fetchTodosRequested as fetchTodoRequestedActionCreator } from "../actions/fetchTodosAction"
import addTodoThunkActionCreator from "../thunks/addTodoThunk"
import TodoApp from "../../components/TodoApp"

function mapStateToProps(state, ownProps) {
  return {
    todoItems: [...state.todo, ...state.fetchTodos.data],
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    addTodo: text => {
      // dispatch(addTodoActionCreator(text))
      dispatch(addTodoThunkActionCreator(text))
    },
    removeTodo: () => {
      dispatch(removeTodoActionCreator())
    },
    removeAll: () => {
      dispatch(removeAllTodoActionCreator())
    },
    triggerAsyncFunction: asyncFunction => {
      dispatch(asyncFunction)
    },
    fetchTodo: () => {
      dispatch(fetchTodoRequestedActionCreator())
    },
  }
}

const TodoAppContainer = connect(mapStateToProps, mapDispatchToProps)(TodoApp)

export default TodoAppContainer
