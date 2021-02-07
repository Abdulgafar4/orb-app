import React from 'react'
import { Create, SimpleForm, TextInput, DateInput, NumberInput } from 'react-admin'

const CreditCreate = (props) => {
  return (
    <Create title='Create a Credit Sales' {...props}>
      <SimpleForm>
        <NumberInput source='id' />
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
    </Create>
  )
}

export default CreditCreate
