import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  SimpleList,
  NumberField,
} from 'react-admin'
import { useMediaQuery } from '@material-ui/core';

const CustomerList = (props) => {
  const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
  return (
    <List {...props}>
    {isSmall ? (
        <SimpleList
        primaryText={record => `Id  ${record.id}. Name:  ${record.name} `}
        secondaryText={record => `Number: ${record.phone_number}....  
        Email:  ${record.email} `}
        // tertiaryText={record => ` `}
        />
    ) : (
      <Datagrid>
        <TextField  source='id' />
        <TextField source='name' />
        <TextField source='email' />
        <NumberField source="phone_number"/>
        <EditButton basePath='customer' />
        <DeleteButton basePath='customer' />
      </Datagrid>

      )}

    </List>
  );
}

export default CustomerList