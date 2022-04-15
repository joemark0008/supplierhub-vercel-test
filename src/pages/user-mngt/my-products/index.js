import React from 'react';
import AppPage from '../../../@crema/hoc/AppPage';
import asyncComponent from '../../../@crema/utility/asyncComponent';

const MyProducts = asyncComponent(() =>
  import('../../../modules/User-Mngt/My-Products'),
);
export default AppPage(() => <MyProducts />);
