import * as React from 'react';
import { Datagrid, Show, SimpleShowLayout, ArrayField, DateField, TextField, ChipField} from 'react-admin';

const OrderShow = (props) => {
    return (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <ChipField source="user_id.username" label='User' />
            <ArrayField source="orderProducts">
                <Datagrid>
                    <TextField source="id" />
                    <TextField source="quantity" />
                    <DateField source="created_at" />
                    <ChipField source="product.name" label='Product'/>
                </Datagrid>
            </ArrayField>
        </SimpleShowLayout>
    </Show>
)}
export default OrderShow