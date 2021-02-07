
import React from 'react'
import { SimpleForm, TextInput, DateInput, NumberInput, Edit } from 'react-admin'

const NormalEdit = (props) => {
  return (
    <Edit title='Edit a Sales' {...props}>
      <SimpleForm>
        <NumberInput disabled source='id' />
        <TextInput source='product_name' />
        <TextInput  source='category' />
        <TextInput  source='description' />
        <TextInput source='price' />
        <TextInput source='qty' />
        <TextInput source='amount' />
        <TextInput source='profit' />
        <TextInput source='total'/>
        <DateInput label='Published' source='publishedAt' />
      </SimpleForm>
    </Edit>
  )
}

export default NormalEdit