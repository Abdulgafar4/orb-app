import React from 'react'
import { Edit, SimpleForm, TextInput, NumberInput } from 'react-admin'

const CustomerEdit = (props) => {
  return (
    <Edit title='Edit Customer' {...props}>
      <SimpleForm>
        <NumberInput disabled source='id' />
        <TextInput source='name' />
        <TextInput source='email' />
        <TextInput source="phone_number"/>
      </SimpleForm>
    </Edit>
  )
}

export default CustomerEdit
