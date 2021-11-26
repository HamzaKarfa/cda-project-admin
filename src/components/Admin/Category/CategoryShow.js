import * as React from 'react';
import { Show, SimpleShowLayout, RichTextField, DateField, TextField, useResourceContext } from 'react-admin';

const CategoryShow = (props) => {
    return (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="image" />
            <TextField source="description" />
        </SimpleShowLayout>
    </Show>
)}
export default CategoryShow