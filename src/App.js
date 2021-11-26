import * as React from "react";
import { Admin, Resource, ListGuesser, ShowGuesser ,EditGuesser } from 'react-admin';
import { fetchUtils } from 'react-admin';

import authProviderLogin  from './authProviderLogin'
import { ENTRYPOINT } from "./entrypoint";

import MyLoginPage from './components/auth/login';
import MyLogoutButton from './components/auth/logout';
import CategoryList from "./components/Admin/Category/CategoryList";
import CategoryCreate from "./components/Admin/Category/CategoryCreate";
import customRest from "./components/Admin/customRest";
import CategoryEdit from "./components/Admin/Category/CategoryEdit";
import CategoryShow from "./components/Admin/Category/CategoryShow";
import { UserCreate } from "./components/Admin/Users/UserCreate";
import { Layout, Notification } from 'react-admin';
import LeftMenu from "./components/Admin/menu";
import { UserMenu } from "ra-ui-materialui";
import { Route } from 'react-router-dom';
import Accueil from "./components/Accueil";
import ProductCreate from "./components/Admin/Product/ProductCreate";
import addUploadFeature from "./UploadFileFeature";
const httpClient = (url, options = {}) => {
    options.headers = new Headers({ 
        'Accept': 'application/json', 
        'Content-Range':'1',
        'Access-Control-Expose-Headers': 'x-total-count',
    });
    if (localStorage.getItem("token")) {
      options.headers.set('Authorization', 'Bearer ' + localStorage.getItem("token"));
    }
    // add your own headers hereAccess-Control-Allow-Origin
    return fetchUtils.fetchJson(url, options);
};
const dataProvider = customRest(ENTRYPOINT, httpClient);
const uploadCapableDataProvider = addUploadFeature(dataProvider);

const App = () => (
    <Admin 
        dashboard={Accueil} 
        loginPage={MyLoginPage} 
        logoutButton={MyLogoutButton} 
        dataProvider={uploadCapableDataProvider}   
        authProvider={authProviderLogin}
    >
        <Resource name="categories" show={CategoryShow} list={CategoryList}/>
        <Resource name="sub_categories" list={ListGuesser} show={ShowGuesser}/>
        <Resource name="products" list={ListGuesser} create={ProductCreate} edit={EditGuesser} show={ShowGuesser}/>
        <Resource name="users" list={ListGuesser} create={UserCreate} edit={EditGuesser} show={ShowGuesser}/>
        {/* <Resource name="orders" list={ListGuesser} create={UserCreate} edit={EditGuesser} show={ShowGuesser}/> */}
    </Admin>        

);

export default App;