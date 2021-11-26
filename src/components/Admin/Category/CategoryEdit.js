import * as React from 'react';
import { Create, SimpleForm, Datagrid, DateField, TextField, List, useResourceContext } from 'react-admin';

const ResourceName = () => {
    const { resource } = useResourceContext();
    return <>{resource}</>;
}

const CategoryEdit = (props) => {
    return (
    <List {...props}>
        <>
         <ResourceName /> {/* renders 'posts' */}
            <Datagrid rowClick="show">
                <TextField source="id" />
                <TextField source="name" />
                <TextField source="image" />
                <TextField source="description" />
               
            </Datagrid>
        </>
    </List>
)}
export default CategoryEdit