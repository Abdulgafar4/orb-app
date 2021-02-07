import React from 'react'
import { Create, SimpleForm, TextInput, DateInput, NumberInput } from 'react-admin'

const ProductCreate = (props) => {
  return (
    <Create title='Create a Product' {...props}>
      <SimpleForm>
        <NumberInput source='id' />
        <TextInput source='name' />
        <TextInput  source='category' />
        <TextInput source='Cost_price' />
        <TextInput source='Selling_price' />
        <TextInput source='stock' />
        <DateInput label='Published' source='publishedAt' />
      </SimpleForm>
    </Create>
  )
}

export default ProductCreate
