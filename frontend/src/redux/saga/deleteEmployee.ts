import { all, put, call, takeEvery } from "redux-saga/effects";
import * as actionType from "../actions/actionTypes";
// import postsblogPostApi from "../../server/api";

export default function* deleteEmployeeSaga() {
    yield takeEvery(actionType.DELETE_EMPLOYEE, deleteEmployee);
}

function* deleteEmployee(action: any) {
    console.log(action)
    try {
        // const employeeResponse = yield call(postsblogPostApi.delete, action.payload);
        // yield put({ type: actionType.DELETED_EMPLOYEE, payload: employeeResponse });
    } catch (err) {
        console.log(err);
    }
}