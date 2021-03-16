const initialState = {
    user: {}
}

const GET_USER = 'GET_USER';
const CLEAR_USER = 'CLEAR_USER';

export const getUser = userObj => {
    return {
        type: GET_USER,
        payload: userObj
    }
}

export const clearUser = () => {
    return {
        type: CLEAR_USER,
        paload: {}
    }
}

export default function userReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_USER:
            return { ...state, user: payload };
        default:
            return state;
    }
}