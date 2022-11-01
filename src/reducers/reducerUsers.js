import { types } from "../types/types";

export const reducerUsers = (state, action) => {
    switch (action.type) {
        case types.ADD_USER:
            return [
                ...state,
                action.payload
            ]

        case types.DELETE_USER:
            return state.filter(element => element.name !== action.payload.name);

        default:
            return state
    }
}