import { applyMiddleware, compose, createStore } from "redux"
import rootReducer from "./reducers"
import asyncFucntionMiddleware from "./middlewares/asyncFunctionMiddleware"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(asyncFucntionMiddleware)))

export default store
