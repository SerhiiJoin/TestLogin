import {
    LOGIN_SUCCESS,
    REGISTER_USER,
    LOGOUT_USER
} from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    user: {},
    registeredUsers: []
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, user: action.payload };
        case LOGOUT_USER:
            return { ...state, user: {} };
        case REGISTER_USER:
            return { ...state, registeredUsers: [...state.registeredUsers, action.payload] };
        default:
            return state;
    }
}
