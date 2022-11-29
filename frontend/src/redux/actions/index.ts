import {
    GET_EMPLOYEE,
    ADD_EMPLOYEE,
    DELETE_EMPLOYEE,
    UPDATE_EMPLOYEE
} from "./actionTypes";

export const getEmployee = () => {
    return {
        type: GET_EMPLOYEE,
    };
};
export const addEmployee = (data : any) => {
    return {
        type: ADD_EMPLOYEE, payload: data
    };
};
export const updateEmployee = (data : any) => {
    return {
        type: UPDATE_EMPLOYEE, payload: data
    };
};
export const deleteEmployee = (id: any) => {
    return {
        type:  DELETE_EMPLOYEE, payload: id
    };
};