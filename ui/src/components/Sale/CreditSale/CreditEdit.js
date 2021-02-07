import React from 'react'
import { SimpleForm, TextInput, DateInput, NumberInput, Edit } from 'react-admin'

const CreditEdit = (props) => {
  return (
    <Edit title='Edit a Credit Sales' {...props}>
      <SimpleForm>
        <NumberInput disabled source='id' />
        <TextInput source='product_name' />
        <TextInput  source='category' />
        <TextInput  source='description' />
        <TextInput source='price' />
        <TextInput source='qty' />
        <TextInput source='amount_paid' />
        <TextInput source='amount_remain' />
        <TextInput source='total_amount'/>
        <DateInput label='Published' source='publishedAt' />
      </SimpleForm>
    </Edit>
  )
}

export default CreditEdit