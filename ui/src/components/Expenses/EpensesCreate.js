import React from 'react'
import { Create, SimpleForm, TextInput,  NumberInput, DateInput } from 'react-admin'

const ExpensesCreate = (props) => {
  return (
    <Create title='Create a Expenses' {...props}>
      <SimpleForm>
        <NumberInput source='id' />
        <TextInput source='category' />
        <TextInput source='description' />
        <TextInput source='amount' />
        <TextInput source="payment_type"/>
        <TextInput source="tax"/>
        <TextInput source="recipient_name"/>
        <TextInput source="approved_by"/>
        <DateInput label='Published' source='publishedAt' />
      </SimpleForm>
    </Create>
  )
}

export default ExpensesCreate