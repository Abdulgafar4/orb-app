import React from 'react'
import { Edit, SimpleForm, TextInput, NumberInput } from 'react-admin'

const SupplyEdit = (props) => {
  return (
    <Edit title='Edit Suppliers' {...props}>
      <SimpleForm>
        <NumberInput disabled source='id' />
        <TextInput source='name' />
        <TextInput source='company_name' />
        <TextInput source='email' />
        <TextInput source="phone_number"/>
      </SimpleForm>
    </Edit>
  )
}

export default SupplyEdit