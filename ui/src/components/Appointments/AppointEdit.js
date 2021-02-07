import React from 'react'
import { Edit, SimpleForm, TextInput, NumberInput, DateTimeInput } from 'react-admin'

const AppointEdit = (props) => {
  return (
    <Edit title='Edit Appointment' {...props}>
      <SimpleForm>
        <NumberInput disabled source='id' />
        <TextInput source='appointment_For_Person' />
        <TextInput source='appointment_For_Employee' />
        <DateTimeInput source="appointment_Date"/>
        <TextInput source="appointment_Start"/>
        <TextInput source="appointment_End"/>
        <TextInput source="type"/>
        <TextInput multiline source="notes"/>
      </SimpleForm>
    </Edit>
  )
}

export default AppointEdit