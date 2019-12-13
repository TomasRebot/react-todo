import { userConstants } from '../Constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                loginIn: true,
                user: action.user
            };
        case userConstants.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.user
            };
        case userConstants.LOGIN_FAILURE:
            return {
                loginError: action.error
            };
        case userConstants.LOGOUT:
            return {};
        case userConstants.GET_AUTH_USER:
            return {
                user: user
            };
        default:
            return state
    }
}