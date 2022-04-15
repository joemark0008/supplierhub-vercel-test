import React from 'react';
import AppPage from '../../../@crema/hoc/AppPage';
import asyncComponent from '../../../@crema/utility/asyncComponent';

const MyOrders = asyncComponent(() =>
  import('../../../modules/User-Mngt/My-Orders'),
);
export default AppPage(() => <MyOrders />);
