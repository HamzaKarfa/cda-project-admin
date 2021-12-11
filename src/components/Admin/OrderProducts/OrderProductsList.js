import * as React from 'react';
import { Datagrid, DateField, TextField, List, useResourceContext, ChipField, ShowButton } from 'react-admin';

const ResourceName = () => {
    const { resource } = useResourceContext();
    return <>{resource}</>;
}
const OrderProductsList = (props) => {
    console.log(props);
    return (
    <List {...props}>
        <>
         <ResourceName /> {/* renders 'posts' */}
            <Datagrid  rowClick="show">
                <TextField source="id" />
                <TextField source="orderId" />
                <DateField source="created_at" />
                <TextField source="product" />
                <TextField source="quantity" />
                <ShowButton />
            </Datagrid>
        </>
    </List>
)}
export default OrderProductsList