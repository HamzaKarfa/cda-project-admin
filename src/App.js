import * as React from "react";
import { Admin, Resource, ListGuesser, ShowGuesser ,EditGuesser } from 'react-admin';
import { fetchUtils } from 'react-admin';

import authProviderLogin  from './authProviderLogin'
import { ENTRYPOINT } from "./entrypoint";

import MyLoginPage from './components/auth/login';
import MyLogoutButton from './components/auth/logout';
import addUploadFeature from "./UploadFileFeature";
import customRest from "./components/Admin/customRest";

import Accueil from "./components/Accueil";
import CategoryList from "./components/Admin/Category/CategoryList";
import CategoryShow from "./components/Admin/Category/CategoryShow";
import CategoryCreate from "./components/Admin/Category/CategoryCreate";
import CategoryEdit from "./components/Admin/Category/CategoryEdit";
import SubCategoryList from "./components/Admin/SubCategory/SubCategoryList";
import SubCategoryShow from "./components/Admin/SubCategory/SubCategoryShow";
import SubCategoryCreate from "./components/Admin/SubCategory/SubCategoryCreate";
import SubCategoryEdit from "./components/Admin/SubCategory/SubCategoryEdit";
import ProductList from "./components/Admin/Product/ProductList";
import ProductCreate from "./components/Admin/Product/ProductCreate";
import ProductShow from "./components/Admin/Product/ProductShow";
import ProductEdit from "./components/Admin/Product/ProductEdit";

import { UserCreate } from "./components/Admin/Users/UserCreate";
import OrderList from "./components/Admin/Orders/OrderList";
import OrderShow from "./components/Admin/Orders/OrderShow";
import OrderProductsShow from "./components/Admin/OrderProducts/OrderProductsShow";
import OrderProductsList from "./components/Admin/OrderProducts/OrderProductsList";

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
        <Resource name="categories" show={CategoryShow} list={CategoryList} create={CategoryCreate} edit={CategoryEdit}/>
        <Resource name="sub_categories" show={SubCategoryShow} list={SubCategoryList} create={SubCategoryCreate} edit={SubCategoryEdit}/>
        <Resource name="products" list={ProductList} create={ProductCreate} edit={ProductEdit} show={ProductShow}/>
        <Resource name="users" list={ListGuesser} create={UserCreate} edit={EditGuesser} show={ShowGuesser}/>
        <Resource name="orders" list={OrderList} show={OrderShow}/>
        <Resource name="order_products" list={OrderProductsList} show={OrderProductsShow}/>
    </Admin>        

);

export default App;