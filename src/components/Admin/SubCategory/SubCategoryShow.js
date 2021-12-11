import * as React from 'react';
import { Show, SimpleShowLayout, RichTextField, DateField, TextField, useResourceContext, ImageField, ChipField } from 'react-admin';

const SubCategoryShow = (props) => {
    return (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <ChipField source="category.name" />
            <ImageField source="image.imagePath"/>

        </SimpleShowLayout>
    </Show>
)}
export default SubCategoryShow