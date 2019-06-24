import axios from "axios";

export const userService = {
    login,
    logout,
    getAll,
    _delete,
    register
};

function login(username, password) {

    return new Promise((resolve, reject) => {

        axios.get('http://localhost:3001/users').then(
            res => {
                let user = {};
                let users = res.data;
                console.log('get all users in system.');
                console.log(users);
                if (users && users.length > 0){

                    // find if any user matches login credentials
                    let filteredUsers = users.filter(user => {
                        return user.username === username && user.password === password;
                    });

                    if (filteredUsers.length) {
                        // if login details are valid return user details and fake jwt token
                        user = filteredUsers[0];
                        let userLoggedIn = {
                            id: user.id,
                            username: user.username,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            token: 'fake-jwt-token'
                        };

                        // store user details and jwt token in local storage to keep user logged in between page refreshes
                        localStorage.setItem('user', JSON.stringify(userLoggedIn));

                        resolve(userLoggedIn);
                        console.log('login success.');

                    }else{
                        
                        const errMsg = 'Username or password is incorrect';
                        console.log(errMsg);
                        reject(errMsg);
                    }

                }else{
                    //error
                    const errMsg = 'Not have user in systems, Please resigter user before.';
                    console.log(errMsg);
                    reject(errMsg);
                }

            }
        ).catch(function (error) {
                console.log(error);
                reject(error.toString());
        }); 
        
    });
}

function getAll() {
    return new Promise((resolve, reject) => {
        axios.get("http://localhost:3001/users").then(
            res => {
                resolve(res.data);
            }
        ).catch(function (error) {
            console.log(error);
            reject(error.toString());
        }); 
    });
}

function logout() {
    console.log('user.service -> logout()..');
    
    return new Promise((resolve) => {
        // remove user from local storage to log user out
        localStorage.removeItem('user'); 
        resolve('logout success.');
    })
    
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(userDelete) {

    const id = userDelete.id;

    return new Promise((resolve, reject) => {

        let user = JSON.parse(localStorage.getItem('user'));
        if (userDelete.username === user.username){
            reject('Cannot delete my user.');
            return;
        }

        axios.delete("http://localhost:3001/users/"+id).then(
            res => {
                resolve();
            }
        ).catch(function (error) {
            console.log(error);
            reject(error.toString());
        }); 
    });

}

function get_user() {

   console.log('2.5');
   var request = require('sync-request');
   var res = request('GET', 'http://localhost:3001/users/');
   //console.log(res.getBody());
   //console.log('2.555');
    
   const users = JSON.parse(res.getBody());
   return users;
}

function register(newuser) {

    console.log('in register()...');

    return new Promise((resolve, reject) => {

        //validate duplicate username
        const users = get_user();
        let duplicateUser = users.filter(user => { return user.username === newuser.username; }).length;
        if (duplicateUser) {
            console.log('Username "' + newuser.username + '" is already taken');
            reject('Username "' + newuser.username + '" is already taken');
            return;
        }

        console.log('4');
        axios.post("http://localhost:3001/users/", newuser).then(
            res => {
                resolve();
            }
        ).catch(function (error) {
            console.log(error);
            reject(error.toString());
        }); 
    });
}