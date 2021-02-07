import React from 'react'
import { Create, SimpleForm, TextInput,  NumberInput } from 'react-admin'

const SupplyCreate = (props) => {
  return (
    <Create title='Create a Suppliers' {...props}>
      <SimpleForm>
        <NumberInput source='id' />
        <TextInput source='name' />
        <TextInput source='company_name' />
        <TextInput source='email' />
        <TextInput source="phone_number"/>
      </SimpleForm>
    </Create>
  )
}

export default SupplyCreate