import React from 'react'
import { Create, SimpleForm, TextInput,  NumberInput,  DateInput } from 'react-admin'

const CustomerCreate = (props) => {
  return (
    <Create title='Create a Category' {...props}>
      <SimpleForm>
        <NumberInput source='id' />
        <TextInput source='category' />
        <DateInput label='Published' source='publishedAt' />
      </SimpleForm>
    </Create>
  )
}

export default CustomerCreate