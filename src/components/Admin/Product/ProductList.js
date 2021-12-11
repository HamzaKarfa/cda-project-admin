import * as React from 'react';
import { EditButton , DeleteButton, Datagrid, TextField, List, useResourceContext, ImageField, ChipField } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

const ResourceName = () => {
    const { resource } = useResourceContext();
    return <>{resource}</>;
}


const useImageFieldStyles = makeStyles(theme => ({
    image: { // This will override the style of the <img> inside the <div>
        height: 60,
    }
}));

const PriceField = props => {
    return (
        <div style={{display:'flex'}}>
        <ChipField source="price.price"/>
        <ChipField source='price.type' />
        </div>);
};
const ProductList = (props) => {
    const imageFieldClasses = useImageFieldStyles();

    return (
    <List {...props}>
        <>
         <ResourceName /> {/* renders 'posts' */}
            <Datagrid  rowClick="show">
                <TextField source="id" />
                <TextField source="name" />
                <TextField source="origin" />
                <ImageField classes={imageFieldClasses} source="image.imagePath"/>
                <PriceField source="price / type" />
                <ChipField source="sub_categories.name" />
                <ChipField source="sub_categories.category.name" />
                <EditButton />
                <DeleteButton />
            </Datagrid>
        </>
    </List>
)}
export default ProductList