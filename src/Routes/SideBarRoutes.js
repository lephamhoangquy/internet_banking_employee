import React from 'react';
import PeopleIcon from '@material-ui/icons/People';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AddCustomer from '../Containers/Dashboard/AddCustomer';
import ChargeMoney from '../Containers/Dashboard/ChargeMoney';

export const Routes = [
  {
    id: 'add-customer',
    name: 'Thêm khách hàng mới',
    icon: <PeopleIcon />,
    component: <AddCustomer />,
  },
  {
    id: 'charge-money',
    name: 'Nạp tiền',
    icon: <AttachMoneyIcon />,
    component: <ChargeMoney />,
  },
];
