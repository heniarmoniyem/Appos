import * as actionType from '../actions/actionTypes'


const initialState = {
    post: null
};

export default function (state = initialState, action : any) {
    switch (action.type) {
        case actionType.ADDED_EMPLOYEE: {
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