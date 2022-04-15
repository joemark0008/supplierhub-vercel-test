import React from 'react';
import AppPage from '../../../@crema/hoc/AppPage';
import asyncComponent from '../../../@crema/utility/asyncComponent';

const Orders = asyncComponent(() =>
  import('../../../modules/Product-Mngt/Orders'),
);
export default AppPage(() => <Orders />);
