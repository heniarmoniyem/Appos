import { combineReducers } from "redux";

import {addEmployee} from "../actions/index";
import {getEmployee} from "../actions/index";
import {updateEmployee} from "../actions/index";
import {deleteEmployee} from "../actions/index";

export default combineReducers({
    addEmployee,
    getEmployee,
    updateEmployee,
    deleteEmployee
});