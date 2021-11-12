import { ENTRYPOINT } from "./entrypoint";
import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK, AUTH_GET_PERMISSIONS } from 'react-admin';
import decodeJwt from 'jwt-decode';

export default function authProvider(type, params)  {
    console.log(type)
    if (type === AUTH_LOGIN) {
        const { email, password } = params;
        console.log(email, password)
        const request = new Request(ENTRYPOINT+'/authentication_token', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: new Headers({ 'Content-Type': 'application/ld+json' }),
        });
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(({ token }) => {
                localStorage.setItem('token', token);
            });
    }
    if (type === AUTH_LOGOUT) {
        localStorage.removeItem('token');
        return Promise.resolve();
    }
    if (type === AUTH_ERROR) {
        const status  = params.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem('token');
            return Promise.reject();
        }
        return Promise.resolve();
    }
    if (type === AUTH_CHECK) {
        return localStorage.getItem('token') ? Promise.resolve() : Promise.reject({ redirectTo: '/login' });
    }
    if (type === AUTH_GET_PERMISSIONS){
        
        if(localStorage.getItem('token')){
           const jwtInfo =  decodeJwt(localStorage.getItem('token'))
            console.log(jwtInfo);
            return jwtInfo.roles[0] === "ROLE_ADMIN" ?  Promise.resolve(true) : Promise.reject("You're not a admin");
        }else{
            return  Promise.reject("Please Login at Admin User")
        }
    }
    return Promise.resolve(type);
};