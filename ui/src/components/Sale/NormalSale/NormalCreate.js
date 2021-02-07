import React from 'react'
import { Create, SimpleForm, TextInput, DateInput, NumberInput } from 'react-admin'

const NormalCreate = (props) => {
  return (
    <Create title='Create a Sales' {...props}>
      <SimpleForm>
        <NumberInput source='id' />
        <TextInput source='product_name' />
        <TextInput  source='category' />
        <TextInput  source='description' />
        <TextInput source=' price' />
        <TextInput source='qty' />
        <TextInput source='amount' />
        <TextInput source='profit' />
        <TextInput source='total'/>
        <DateInput label='Published' source='publishedAt' />
      </SimpleForm>
    </Create>
  )
}

export default NormalCreate