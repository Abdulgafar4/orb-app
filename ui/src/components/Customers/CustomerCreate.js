import React from 'react'
import { Create, SimpleForm, TextInput,  NumberInput } from 'react-admin'

const CustomerCreate = (props) => {
  return (
    <Create title='Create a Customer' {...props}>
      <SimpleForm>
        <NumberInput source='id' />
        <TextInput source='name' />
        <TextInput source='email' />
        <TextInput source="phone_number"/>
      </SimpleForm>
    </Create>
  )
}

export default CustomerCreate