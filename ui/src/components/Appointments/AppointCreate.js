import React from 'react'
import { Create, SimpleForm, TextInput,  NumberInput, DateTimeInput } from 'react-admin'

const AppointCreate = (props) => {
  return (
    <Create title='Create  Employee' {...props}>
      <SimpleForm>
        <NumberInput source='id' />
        <TextInput source='appointment_For_Person' />
        <TextInput source='appointment_For_Employee' />
        <DateTimeInput source="appointment_Date"/>
        <TextInput source="appointment_Start"/>
        <TextInput source="appointment_End"/>
        <TextInput source="type"/>
        <TextInput multiline source="notes"/>
      </SimpleForm>
    </Create>
  )
}

export default AppointCreate