import { useMediaQuery } from '@material-ui/core';
import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
  SimpleList,
 
} from 'react-admin'

const NormalList = (props) => {
  const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
  return (
    <List {...props}>
    {isSmall ? (
        <SimpleList
            primaryText={record => `Id ${record.id}...  Product: ${record.product_name}.... Category: ${record.category}`}
            secondaryText={record => `Price: ${record.price}  Qty: ${record.qty}....  Amount: ${record.amount}`}
            tertiaryText={record => `Profit: ${record.profit}... Total: ${record.total}....  Date: ${record.publishedAt}`}
        />
    ) : (
      <Datagrid>
        <TextField source='id' />
        <TextField source='product_name' />
        <TextField  source='category' />
        <TextField  source='description' />
        <TextField source='price' />
        <TextField source='qty' />
        <TextField source='amount' />
        <TextField source='profit' />
        <TextField source='total'/>
        <DateField label='Published' source='publishedAt' />
        <EditButton basePath='sales' />
        <DeleteButton basePath='sales' />
      </Datagrid>

      )}

    </List>
  );
}

export default NormalList
