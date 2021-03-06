import * as React from 'react';
import { Show, SimpleShowLayout, RichTextField, DateField, TextField, useResourceContext, ImageField, ChipField } from 'react-admin';

const CategoryShow = (props) => {
    return (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <ImageField source="image.imagePath"/>

        </SimpleShowLayout>
    </Show>
)}
export default CategoryShow