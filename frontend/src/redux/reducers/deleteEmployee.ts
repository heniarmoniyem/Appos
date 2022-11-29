import * as actionType from "../actions/actionTypes";

const initialState = {
    delete: null
};

export default function (state = initialState, action: any) {
    switch (action.type) {
        case actionType.DELETED_EMPLOYEE: {
            return {
                ...state,
                post: action.payload
            };
        }
        default: {
            return { ...state };
        }
    }
}