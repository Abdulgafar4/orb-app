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
  import { useMediaQuery } from '@material-ui/core';
  
  const StockList = (props) => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
      <List {...props}>
      {isSmall ? (
          <SimpleList
              primaryText={record => `Id ${record.id}.  \nCategory: ${record.category}`}
              secondaryText={record =>`Stock: ${record.stock}....  Product_Name: ${record.product_name} `}
              tertiaryText={record => new Date(record.publishedAt).toLocaleDateString()}
          />
      ) : (
        <Datagrid>
        <TextField source='id'/>
        <TextField source='category' />
        <TextField source='product_name' />
        <TextField source='stock' />
          <DateField source='publishedAt' />
          <EditButton basePath='stock' />
          <DeleteButton basePath='stock' />
        </Datagrid>
  
        )}
  
      </List>
    );
  }

export default StockList