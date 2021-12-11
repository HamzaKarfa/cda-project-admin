import * as React from 'react';
import { useResourceContext, Create, SimpleForm, TextInput, ImageField, ImageInput, NumberInput, DateInput,ReferenceInput,SelectInput, required } from 'react-admin';

const ResourceName = () => {
    const { resource } = useResourceContext();
    return <>{resource}</>;
}

const CategoryCreate = (props) => {
    return (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="description" />
            <ImageInput {...props} accept="image/*" multiple={false} source="image">
                <ImageField source="src" title="image"/>
            </ImageInput>
        </SimpleForm>
    </Create>
)}
export default CategoryCreate