import * as React from 'react';
import {  Edit,TextField, SimpleForm, TextInput, ImageField, ImageInput, NumberInput, DateInput,ReferenceInput,SelectInput, required } from 'react-admin';



const CategoryEdit = (props) => {
    return (
        <Edit {...props}>
        <SimpleForm>
            <TextField source="id" />
            <TextInput source="name" />
            <TextInput source="description" />
        </SimpleForm>
    </Edit>
)}
export default CategoryEdit