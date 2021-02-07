import React from 'react'
import { Create, SimpleForm, TextInput,  NumberInput } from 'react-admin'

const EmployCreate = (props) => {
  return (
    <Create title='Create  Employee' {...props}>
      <SimpleForm>
        <NumberInput source='id' />
        <TextInput source='name' />
        <TextInput source='email' />
        <TextInput source="phone_number"/>
      </SimpleForm>
    </Create>
  )
}

export default EmployCreate