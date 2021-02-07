import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  SimpleList,
  DateField,
} from 'react-admin'
import { useMediaQuery } from '@material-ui/core';

const ExpensesList = (props) => {
  const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
  return (
    <List {...props}>
    {isSmall ? (
        <SimpleList
        primaryText={record => `Id ${record.id}. Category:  ${record.category}.... Description:  ${record.description} `}
        secondaryText={record => `Amount: ${record.amount}....  
        Payment Type:  ${record.payment_type}....  Tax:  ${record.tax}.... `}
        tertiaryText={record => `Recipient: ${record.recipient_name}.... Approved By: ${record.approved_by} ... 
        Date: ${record.publishedAt}  `}
        />
    ) : (
      <Datagrid>
        <TextField  source='id' />
        <TextField source='category' />
        <TextField source='description' />
        <TextField source='amount' />
        <TextField source="payment_type"/>
        <TextField source="tax"/>
        <TextField source="recipient_name"/>
        <TextField source="approved_by"/>
        <DateField label='Published' source='publishedAt' />
        <EditButton basePath='expenses' />
        <DeleteButton basePath='expenses' />
      </Datagrid>

      )}

    </List>
  );
}

export default ExpensesList