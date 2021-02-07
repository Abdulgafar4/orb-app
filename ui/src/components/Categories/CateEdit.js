import React from 'react'
import { Edit, SimpleForm, TextInput, NumberInput } from 'react-admin'

const CateEdit = (props) => {
  return (
    <Edit title='Edit Category' {...props}>
      <SimpleForm>
        <NumberInput disabled source='id' />
        <TextInput source='category' />
      </SimpleForm>
    </Edit>
  )
}

export default CateEdit