import React from 'react'
import { Edit, SimpleForm, TextInput, NumberInput, DateInput } from 'react-admin'

const ExpensesEdit = (props) => {
  return (
    <Edit title='Edit Expenses' {...props}>
      <SimpleForm>
        <NumberInput disabled source='id' />
        <TextInput source='category' />
        <TextInput source='description' />
        <TextInput source='amount' />
        <TextInput source="payment_type"/>
        <TextInput source="tax"/>
        <TextInput source="recipient_name"/>
        <TextInput source="approved_by"/>
        <DateInput label='Published' source='publishedAt' />
      </SimpleForm>
    </Edit>
  )
}

export default ExpensesEdit