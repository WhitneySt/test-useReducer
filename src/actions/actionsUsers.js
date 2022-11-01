import { types } from "../types/types"

export const addUser = (user) => {
    return {
        type: types.ADD_USER,
        payload: user
    }
}