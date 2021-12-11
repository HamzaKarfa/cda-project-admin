import * as React from 'react';
import { EditButton , DeleteButton, Datagrid, DateField, TextField, List, useResourceContext, ChipField } from 'react-admin';

const ResourceName = () => {
    const { resource } = useResourceContext();
    return <>{resource}</>;
}
const OrderList = (props) => {
    console.log(props);
    return (
    <List {...props}>
        <>
         <ResourceName /> {/* renders 'posts' */}
            <Datagrid  rowClick="show">
                <TextField source="id" />
                <ChipField source="user_id.username" label='User'/>
                <ChipField source="orderProducts[0].id" label="OrderProduct" />
                <ChipField source="orderProducts[0].product.name" label="Product" />
            </Datagrid>
        </>
    </List>
)}
export default OrderList