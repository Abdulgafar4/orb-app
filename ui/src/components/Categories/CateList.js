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

const CateList = (props) => {
  const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
  return (
    <List {...props}>
    {isSmall ? (
        <SimpleList
            primaryText={record => `Id ${record.id}`}
            secondaryText={record => `Category: ${record.category}`}
            tertiaryText={record => new Date(record.publishedAt).toLocaleDateString()}
        />
    ) : (
      <Datagrid>
        <TextField  source='id' />
        <TextField source='category' />
        <DateField source='publishedAt' />
        <EditButton basePath='category' />
        <DeleteButton basePath='category' />
      </Datagrid>

      )}

    </List>
  );
}

export default CateList