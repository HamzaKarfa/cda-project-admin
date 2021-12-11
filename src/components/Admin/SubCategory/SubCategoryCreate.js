import * as React from 'react';
import { Create, SimpleForm, TextInput, ImageField, ImageInput, NumberInput, DateInput,ReferenceInput,SelectInput, required } from 'react-admin';



const SubCategoryCreate = (props) => {
    return (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <ReferenceInput label="categories" source="categories.id" reference="categories" validate={[required()]}>
                    <SelectInput optionText="name" />
                </ReferenceInput>
            <ImageInput {...props} accept="image/*" multiple={false} source="image">
                <ImageField source="src" title="image"/>
            </ImageInput>
        </SimpleForm>
    </Create>
)}
export default SubCategoryCreate