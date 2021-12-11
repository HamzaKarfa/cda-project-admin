import * as React from 'react';
import { EditButton, SimpleForm , DeleteButton, Datagrid, TextField, List, useResourceContext, ImageField, ChipField } from 'react-admin';
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
const SubCategoryList = (props) => {
    const imageFieldClasses = useImageFieldStyles();
    
    return (
    <List {...props}>
        <>
         <ResourceName /> {/* renders 'posts' */}
            <Datagrid  rowClick="show">
                <TextField source="id" />
                <TextField source="name" />
                <ImageField classes={imageFieldClasses} source="image.imagePath"/>
                <ChipField source="category.name" />
                <EditButton />
                <SimpleForm>
                    <DeleteButton />
                </SimpleForm>
                
            </Datagrid>
        </>
    </List>
)}
export default SubCategoryList