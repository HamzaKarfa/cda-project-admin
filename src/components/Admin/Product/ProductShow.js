import * as React from 'react';
import { Show, SimpleShowLayout, RichTextField, DateField, TextField, useResourceContext, ImageField, ChipField } from 'react-admin';




const ProductShow = ({...props }) => {

    return (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <ImageField source="image.imagePath"/>

            <TextField source="origin" />
            <TextField source="price.price" />
            <TextField source="price.type" />
            <ChipField source="sub_categories.name" />

        </SimpleShowLayout>
    </Show>
)}
export default ProductShow