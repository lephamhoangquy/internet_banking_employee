import React from 'react';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import HistoryIcon from '@material-ui/icons/History';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AddCustomer from '../Containers/Dashboard/AddCustomer';
import ChargeMoney from '../Containers/Dashboard/ChargeMoney';
import Transaction from '../Containers/Dashboard/TransactionHistory';

export const Routes = [
  {
    id: 'add-customer',
    name: 'Thêm khách hàng mới',
    icon: <PersonAddIcon />,
    component: <AddCustomer />,
  },
  {
    id: 'charge-money',
    name: 'Nạp tiền',
    icon: <AttachMoneyIcon />,
    component: <ChargeMoney />,
  },
  {
    id: 'transaction-history',
    name: 'Lịch sử giao dịch',
    icon: <HistoryIcon />,
    component: <Transaction />,
  },
];
