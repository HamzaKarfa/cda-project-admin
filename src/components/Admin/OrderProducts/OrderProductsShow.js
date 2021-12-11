import * as React from 'react';
import { Show, SimpleShowLayout, DateField, TextField, ChipField } from 'react-admin';

const OrderProductsShow = (props) => {
    return (
    <Show {...props}>
        <SimpleShowLayout>
                <TextField source="id" />
                <TextField source="orderId" />
                <DateField source="created_at" />
                <ChipField source="product" />
                <TextField source="quantity" />
        </SimpleShowLayout>
    </Show>
)}
export default OrderProductsShow