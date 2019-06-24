
import { userConstants } from '../../_constants';

import { history } from '../../_helpers';
import { alertActions } from './';
import { userService } from '../../_services';

export const userActions = {
    login,
    logout,
    getAll,
    _delete,
    register
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        console.log('in user.action.login...'); 
        console.log('username['+username+"], password ["+password+"]");
        //TODO axios call service
        userService.login(username, password).then(
            user => {
                console.log('login success.');
                console.log(user);
                dispatch(success(user));

                history.push('/');
                
            },
            error => {
                dispatch(failure(error.toString()));
                dispatch(alertActions.error(error.toString()));
            }
        )
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user, path) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function getAll () {
    console.log('in getAll user..');

    return dispatch => {
        dispatch(request());

        userService.getAll().then(
            users => dispatch(success(users)),
            error => dispatch(failure(error.toString()))
        )

    }

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}


function logout() {
    //userService.logout();
    console.log('in logout action.');

    return dispatch =>{ 
        
        userService.logout().then(
            user => {
                dispatch({type: userConstants.LOGOUT });
                dispatch(alertActions.success('Logged out'));
            }
        )

        
    };
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(user) {

    const id = user.id;

    return dispatch => {
        dispatch(request(id));

        userService._delete(user)
            .then(
                user => dispatch(success(id)),
                error => {
                    dispatch(failure(id, error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(id) { return { type: userConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: userConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: userConstants.DELETE_FAILURE, id, error } }
}

function register(user) {

    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                user => { 
                    dispatch(success());
                    history.push('/login');
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user} }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}