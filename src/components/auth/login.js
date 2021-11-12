import * as React from 'react';
import { useState } from 'react';
import { useLogin, useNotify, Notification, defaultTheme } from 'react-admin';
import { ThemeProvider } from '@material-ui/styles';
import  CustomForm  from './customForm';
import { Admin, Login } from 'react-admin';


const MyLoginPage = () => (
  <Login >
    <CustomForm />
  </Login>
)
export default MyLoginPage;


