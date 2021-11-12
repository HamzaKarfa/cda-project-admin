import * as React from 'react';
import { useSelector } from 'react-redux';
import { DashboardMenuItem, Menu, MenuItemLink, getResources, UserMenu, userLogout } from 'react-admin';
import DefaultIcon from '@material-ui/icons/ViewList';
import UserIcon from '@material-ui/icons/People';
import { Button } from 'ra-ui-materialui';
const LeftMenu = (props) => {
    const resources = useSelector(getResources);
    return (
        <Menu {...props}>
            <DashboardMenuItem />
            {resources.map(resource => (
                <MenuItemLink
                key={resource.name}
                to={`/${resource.name}`}
                primaryText={
                    (resource.options && resource.options.label) ||
                    resource.name
                }
                leftIcon={
                    resource.icon ? <resource.icon /> : <DefaultIcon />
                }
                onClick={()=>{console.log("test")}}
                sidebarIsOpen={true}
                />
                ))}
         
        </Menu>
    );
};
export default LeftMenu
