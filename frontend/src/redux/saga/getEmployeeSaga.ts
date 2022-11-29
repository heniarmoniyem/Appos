import { all, put, call, takeEvery } from "redux-saga/effects";
import * as actionType from "../actions/actionTypes";


const apiUrl = 'http://localhost:3500/Employee';

function getApi(){
    return fetch(apiUrl, {
        method: 'GET',
        headers: {
            'content-Type': 'application/json',
        }
    }).then(response=>response.json())
      .catch((error)=>{throw error})
}

export default function* getEmployeeSaga() {
    yield takeEvery(actionType.GET_EMPLOYEE, fetchEmployees);
}

function* fetchEmployees(action: any) {
    try {
        const employeeResponse = yield* [call(getApi)];
        yield* [put({type: 'GET_EMPLOYEE', employeeResponse: employeeResponse})]
    } catch (err) {
       console.log(err)
    }
}