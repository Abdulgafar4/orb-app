import React from 'react'
import { Create, SimpleForm, TextInput, DateInput, NumberInput } from 'react-admin'

const StockCreate = (props) => {
  return (
    <Create title='Create a Stcok' {...props}>
      <SimpleForm>
        <NumberInput source='id'/>
        <TextInput source='category' />
        <TextInput source='product_name' />        
        <TextInput source='stock' />
        <DateInput label='Published' source='publishedAt' />
      </SimpleForm>
    </Create>
  )
}

export default StockCreate