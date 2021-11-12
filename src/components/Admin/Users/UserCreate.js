import * as React from "react";
import { Create, SimpleForm, TextInput, DateInput, ReferenceManyField, Datagrid, TextField, DateField, EditButton, required } from 'react-admin';

export const UserCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="email" />
            <TextInput source="username" options={{ multiLine: true }} />
            <TextInput source="password" />
        </SimpleForm>
    </Create>
);