import React from 'react'
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import ProductList from './components/Product/ProductList'
import ProductCreate from './components/Product/ProductCreate'
import ProductEdit from './components/Product/ProductEdit'
// import StockList from './components/Stock/StockList'
// import StockCreate from './components/Stock/StockCreate'
// import StockEdit from './components/Stock/StockEdit'
import authProvider from './authProvider'
import PostIcon from '@material-ui/icons/Book'
// import StoreIcon from '@material-ui/icons/Store'
import Dashboard from './Dashboard'
import PeopleIcon from '@material-ui/icons/People'
import CustomerList from './components/Customers/CustomerList'
import CustomerEdit from './components/Customers/CustomerEdit'
import CustomerCreate from './components/Customers/CustomerCreate'
import CateList from './components/Categories/CateList'
import CateEdit from './components/Categories/CateEdit'
import CateCreate from './components/Categories/CateCreate'
import CateIcon from '@material-ui/icons/Category'
import SupplyList from './components/Suppliers/SupplyList'
import SupplyCreate from './components/Suppliers/SupplyCreate'
import SupplyEdit from './components/Suppliers/SupplyEdit'
import ExpensesList from './components/Expenses/ExpensesList'
import ExpensesCreate from './components/Expenses/EpensesCreate'
import ExpensesEdit from './components/Expenses/ExpensesEdit'
import MoneyIcon from '@material-ui/icons/MoneyOff';
import EmploList from './components/Employees/EmploList'
import EmployCreate from './components/Employees/EmployCreate'
import EmployEdit from './components/Employees/EmployEdit'
import AppointEdit from './components/Appointments/AppointEdit'
import AppointCreate from './components/Appointments/AppointCreate'
import AppointList from './components/Appointments/AppointList'
import CreditList from './components/Sale/CreditSale/CreditList'
import CreditCreate from './components/Sale/CreditSale/CreditCreate'
import CreditEdit from './components/Sale/CreditSale/CreditEdit'
import CreditCardIcon from '@material-ui/icons/CreditCard';
import NormalList from './components/Sale/NormalSale/NormalList'
import NormalCreate from './components/Sale/NormalSale/NormalCreate'
import NormalEdit from './components/Sale/NormalSale/NormalEdit'



function App() {
  return (
    <Admin authProvider={authProvider} dashboard={Dashboard}  dataProvider={restProvider('api')}>
     <Resource
        name='category'
        list={CateList}
        create={CateCreate}
        edit={CateEdit}
        icon={CateIcon}
      />
      {/* <Resource
        name='stock'
        list={StockList}
        create={StockCreate}
        edit={StockEdit}
        icon={StoreIcon}
      /> */}
      <Resource
        name='product'
        list={ProductList}
        create={ProductCreate}
        edit={ProductEdit}
        icon={PostIcon}
      />
     <Resource
        name='customer'
        list={CustomerList}
        create={CustomerCreate}
        edit={CustomerEdit}
        icon={PeopleIcon}
      />
      <Resource
        name='suppliers'
        list={SupplyList}
        create={SupplyCreate}
        edit={SupplyEdit}
        icon={PeopleIcon}
      />
    <Resource
        name='expenses'
        list={ExpensesList}
        create={ExpensesCreate}
        edit={ExpensesEdit}
        icon={MoneyIcon}
      />
        <Resource
        name='employee'
        list={EmploList}
        create={EmployCreate}
        edit={EmployEdit}
        icon={PeopleIcon}
      />
       <Resource
        name='appointments'
        list={AppointList}
        create={AppointCreate}
        edit={AppointEdit}
        icon={PeopleIcon}
      />     
     <Resource
      name='sales'
      list={NormalList}
      create={NormalCreate}
      edit={NormalEdit}
      icon={CreditCardIcon}
    />
      <Resource
        name='credit'
        list={CreditList}
        create={CreditCreate}
        edit={CreditEdit}
        icon={CreditCardIcon}
      />
    </Admin>
  )
}

export default App
