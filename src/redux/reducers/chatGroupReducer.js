import axios from 'axios';

const initialState = {
    groups: [],
    group: {}
}

const GET_USER_GROUPS = 'GET_USER_GROUPS';
const GET_GROUP = 'GET_GROUP';

export const getUserGroups = id => {

    const fetched = axios.get(`/api/groups/${id}`)

    return {
        type: GET_USER_GROUPS,
        payload: fetched
    }
}

export const getGroupInfo = groupObj => {
    return {
        type: GET_GROUP,
        payload: groupObj
    }
}

export default function groupsReducer(state = initialState, action) {
    const { payload, type } = action;

    switch (type) {
        case GET_USER_GROUPS + '_PENDING':
            return { ...state };
        case GET_USER_GROUPS + '_FULFILLED':
            return { ...state, groups: payload };
        case GET_USER_GROUPS + '_REJECTED':
            return { ...state };
        case GET_GROUP:
            return { ...state, group: payload };
        default:
            return state;
    }
}