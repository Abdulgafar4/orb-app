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

const ProductList = (props) => {
  const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
  return (
    <List {...props}>
    {isSmall ? (
        <SimpleList
            primaryText={record => `Id  ${record.id}. Name:  ${record.name} `}
            secondaryText={record => `Cost_Price:  ${record.Cost_price} `}
            tertiaryText={record => `Selling_Price:  ${record.Selling_price}....  Stock:  ${record.stock} `}
        />
    ) : (
      <Datagrid>
        <TextField source='id' />
        <TextField source='name' />
        <TextField  source='category' />
        <TextField source='Cost_price' />
        <TextField source='Selling_price' />
        <TextField source='stock' />
        <DateField label='Published' source='publishedAt' />
        <EditButton basePath='product' />
        <DeleteButton basePath='product' />
      </Datagrid>

      )}

    </List>
  );
}

export default ProductList
