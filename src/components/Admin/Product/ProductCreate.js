import * as React from 'react';
import { Create, SimpleForm, TextInput, ImageField, ImageInput, NumberInput, DateInput,ReferenceInput,SelectInput, required } from 'react-admin';


const ProductCreate = (props) => {
    
    return (
    <Create {...props}>
            <SimpleForm>
                <TextInput source="name" />
                <TextInput source="origin" />
                <div style={{display:'flex'}}>
                    <NumberInput source="price" />
                    <SelectInput source="priceType" choices={[
                        { id: '/kg', name: '/kg' },
                        { id: "l'unité", name: "l'unité" },
                    ]} />
                </div>

                <ReferenceInput label="sub_categories" source="sub_categories.id" reference="sub_categories" validate={[required()]}>
                    <SelectInput optionText="name" />
                </ReferenceInput>
                <ImageInput {...props} accept="image/*" multiple={false} source="image">
                    <ImageField source="src" title="image"/>
                </ImageInput>
            </SimpleForm>
    </Create>
)}
export default ProductCreate