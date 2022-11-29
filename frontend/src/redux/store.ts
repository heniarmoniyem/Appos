import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers/index";
import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension';
import reducers from './reducers'
import { getEmployeeSaga,addEmployeeSaga, deleteEmployeeSaga, updateEmployeeSaga } from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)))





sagaMiddleware.run(getEmployeeSaga);
sagaMiddleware.run(addEmployeeSaga);
sagaMiddleware.run(updateEmployeeSaga);
sagaMiddleware.run(deleteEmployeeSaga);