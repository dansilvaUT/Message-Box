import axios from 'axios';

const initialState = {
    user: {},
    users: []
}

const GET_USER = 'GET_USER';
const CLEAR_USER = 'CLEAR_USER';
const GET_USERS = 'GET_USERS';

export const getUser = userObj => {
    return {
        type: GET_USER,
        payload: userObj
    }
}

export const getUsers = () => {
    const users = axios.get('/api/users/all');
    return {
        type: GET_USERS,
        payload: users
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
        case GET_USERS + '_PENDING':
            return { ...state };
        case GET_USERS + '_FULFILLED':
            return { ...state, users: payload };
        case GET_USERS + '_REJECTED':
            return { ...state };
        default:
            return state;
    }
}