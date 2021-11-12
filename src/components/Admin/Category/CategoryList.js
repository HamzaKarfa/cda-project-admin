import * as React from 'react';
import { Datagrid, DateField, TextField, List, useResourceContext } from 'react-admin';

const ResourceName = () => {
    const { resource } = useResourceContext();
    return <>{resource}</>;
}

const CategoryList = (props) => {
    console.log(props);
    return (
    <List {...props}>
        <>
         <ResourceName /> {/* renders 'posts' */}
            <Datagrid  rowClick="show">
                <TextField source="id" />
                <TextField source="name" />
                <TextField source="image" />
                <TextField source="description" />
               
            </Datagrid>
        </>
    </List>
)}
export default CategoryList