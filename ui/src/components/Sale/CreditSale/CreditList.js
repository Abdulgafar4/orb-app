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

const CreditList = (props) => {
  const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
  return (
    <List {...props}>
    {isSmall ? (
        <SimpleList
            primaryText={record => `Id ${record.id}... Product: ${record.product_name}...  Category: ${record.category}`}
            secondaryText={record => `Amount Remain: ${record.amount_remain}...  Qty: ${record.qty}...  Amount Paid:  ${record.amount_paid} `}
            tertiaryText={record => `Price: ${record.price}...  Total Amount: ${record.total_amount}...  Date: ${record.publishedAt}`}
        />
    ) : (
      <Datagrid>
        <TextField source='id' />
        <TextField source='product_name' />
        <TextField  source='category' />
        <TextField  source='description' />
        <TextField source='price' />
        <TextField source='qty' />
        <TextField source='amount_paid' />
        <TextField source='amount_remain' />
        <TextField source='total_amount'/>
        <DateField label='Published' source='publishedAt' />
        <EditButton basePath='credit' />
        <DeleteButton basePath='credit' />
      </Datagrid>

      )}

    </List>
  );
}

export default CreditList
