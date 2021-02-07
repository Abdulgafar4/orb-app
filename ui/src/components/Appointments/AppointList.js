import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  SimpleList,
  DateField,
} from 'react-admin'
import { useMediaQuery } from '@material-ui/core';

const AppointList = (props) => {
  const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
  return (
    <List {...props}>
    {isSmall ? (
        <SimpleList
            primaryText={record => `Id ${record.id}....  Person: ${record.appointment_For_Person}....  Employee: ${record.appointment_For_Employee}`}
            secondaryText={record => `Date:  ${record.appointment_Date}....   Start: ${record.appointment_Start}.... End: ${record.appointment_End}`}
            tertiaryText={record => `Type: ${record.type}....  Notes: ${record.notes}`}
        />
    ) : (
      <Datagrid>
        <TextField  source='id' />
        <TextField source='appointment_For_Person' />
        <TextField source='appointment_For_Employee' />
        <DateField source="appointment_Date"/>
        <TextField source="appointment_Start"/>
        <TextField source="appointment_End"/>
        <TextField source="type"/>
        <TextField source="notes"/>                     
        <EditButton basePath='appointments' />
        <DeleteButton basePath='appointments' />        
      </Datagrid>

      )}

    </List>
  );
}

export default AppointList