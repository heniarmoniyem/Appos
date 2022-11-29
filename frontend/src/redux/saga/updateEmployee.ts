import { all, put, call, takeEvery } from "redux-saga/effects";
import * as actionType from "../actions/actionTypes";
// import postsblogPostApi from "../../server/api";

export default function* updateEmployeeSaga() {
    yield takeEvery(actionType.UPDATE_EMPLOYEE, updateEmployee);
}

function* updateEmployee(action: any) {
    console.log(action)
    try {
        // const employeeResponse = yield call(postsblogPostApi.update, action.payload);
        // yield put({ type: actionType.UPDATED_EMPLOYEE, payload: employeeResponse });
    } catch (err) {
        console.log(err);
    }
}