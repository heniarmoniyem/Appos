import * as actionType from "../actions/actionTypes";

const initialState = {
    post: null
};
export default function (state = initialState, action: any) {
    switch (action.type) {
        case actionType.UPDATED_EMPLOYEE: {
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