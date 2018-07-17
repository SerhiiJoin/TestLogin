import {
	LOGIN_SUCCESS,
	REGISTER_USER,
	LOGOUT_USER
} from './types';


export const userChanged = (user) => {
	return {
		type: REGISTER_USER,
		payload: user
	};
};

export const loginUserSuccess = (user) => {
	return {
		type: LOGIN_SUCCESS,
		payload: user
	};
};

export const logOutUser = () => {
	return {
		type: LOGOUT_USER
	};
};
