import * as actionType from "../actions/actionTypes";

const initialState = {
  get: null
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case actionType.GOT_EMPLOYEE: {
      return {
        ...state,
        posts: action.payload,
      };
    }
    default: {
      return { ...state };
    }
  }
}