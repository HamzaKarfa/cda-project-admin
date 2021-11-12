// in src/MyLogoutButton.js
import React from 'react';
import { connect } from 'react-redux';
import { Responsive, userLogout } from 'react-admin';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import ExitIcon from '@material-ui/icons/PowerSettingsNew';
import {useLogout } from 'ra-core';
const MyLogoutButton = ({ ...rest }) => (
    <Responsive
        xsmall={
            <Button
                onClick={useLogout('/login')}
                {...rest}
                variant='contained'
                size="small"
                color='primary'
            >
                <ExitIcon /> Logout
            </Button>
        }
        medium={
            <Button
                onClick={useLogout('/login')}
                size="small"
                {...rest}
                variant='contained'
                color='primary'
            >
                <ExitIcon /> Logout
            </Button>
        }
    />
);
export default MyLogoutButton;