import * as React from 'react';
import { EditButton , DeleteButton, Datagrid, DateField, TextField, List, useResourceContext, ImageField, ChipField } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

const ResourceName = () => {
    const { resource } = useResourceContext();
    return <>{resource}</>;
}
const useImageFieldStyles = makeStyles(theme => ({
    image: { // This will override the style of the <img> inside the <div>
        width: 150,
    }
}));
const CategoryList = (props) => {
    const imageFieldClasses = useImageFieldStyles();
    
    return (
    <List {...props}>
        <>
         <ResourceName /> {/* renders 'posts' */}
            <Datagrid  rowClick="show">
                <TextField source="id" />
                <TextField source="name" />
                <TextField source="description" />
                <ImageField classes={imageFieldClasses} source="image.imagePath"/>
                <EditButton />
                <DeleteButton />
            </Datagrid>
        </>
    </List>
)}
export default CategoryList