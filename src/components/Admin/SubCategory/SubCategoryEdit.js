import * as React from 'react';
import {  Edit,TextField,SelectField, SimpleForm, TextInput, ImageField, ImageInput, NumberInput, DateInput,ReferenceInput,SelectInput, required } from 'react-admin';



const SubCategoryEdit = (props) => {
    return (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <ReferenceInput label="categories" source="categories.id" reference="categories">
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
)}
export default SubCategoryEdit