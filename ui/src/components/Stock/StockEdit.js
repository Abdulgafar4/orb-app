import React from 'react'
import { Edit, SimpleForm, TextInput, DateInput, NumberInput } from 'react-admin'

const StockEdit = (props) => {
  return (
    <Edit title='Edit Stock' {...props}>
      <SimpleForm>
        <NumberInput disabled source='id'/>
        <TextInput source='category' />
        <TextInput source='product_name' />
        <TextInput source='stock' />
        <DateInput label='Published' source='publishedAt' />
      </SimpleForm>
    </Edit>
  )
}

export default StockEdit