import * as React from 'react';
import { Edit,TextField, SimpleForm, TextInput, ImageField, ImageInput, NumberInput, DateInput,ReferenceInput,SelectInput, required } from 'react-admin';

const ProductEdit = (props) => {
    
    return (
    <Edit {...props}>
            <SimpleForm>
                <TextField source="id" />
                <TextInput source="name" />
                <TextInput source="origin" />
                <NumberInput source="price" />
                <ReferenceInput label="sub_categories" source="sub_categories.id" reference="sub_categories" validate={[required()]}>
                    <SelectInput optionText="name" />
                </ReferenceInput>
            </SimpleForm>
    </Edit>
)}
export default ProductEdit