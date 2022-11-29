import { all, put, call, takeEvery } from "redux-saga/effects";
import * as actionType from "../actions/actionTypes";
// import  from "../../api/index";




export default function* addEmployeeSaga() {
    yield takeEvery(actionType.ADD_EMPLOYEE, addEmployee);
}

function* addEmployee(action :any) {
    console.log(action)
    try {
        // const employeeResponse = yield call(postsblogPostApi.add, action.payload);
        // yield put({ type: actionType.ADDED_EMPLOYEE, payload: employeeResponse });
    } catch (err) {
        console.log(err);
    }
}