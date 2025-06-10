import { all } from "redux-saga/effects"
import fetchTodosSaga from "./fetchTodoSaga"

function* rootSaga() {
  yield all([fetchTodosSaga()])
}

export default rootSaga
