import React from 'react'
import { Edit, SimpleForm, TextInput, DateInput, NumberInput } from 'react-admin'

const ProductEdit = (props) => {
  return (
    <Edit title='Edit Product' {...props}>
      <SimpleForm>
      <NumberInput disabled source='id'/>
        <TextInput source='name' />
        <TextInput  source='category' />
        <TextInput source='Cost_price' />
        <TextInput source='Selling_price' />
        <TextInput source='stock' />
        <DateInput label='Published' source='publishedAt' />
      </SimpleForm>
    </Edit>
  )
}

export default ProductEdit
