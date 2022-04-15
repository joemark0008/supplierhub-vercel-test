import React from 'react';
import AppPage from '../../../@crema/hoc/AppPage';
import asyncComponent from '../../../@crema/utility/asyncComponent';

const Products = asyncComponent(() =>
  import('../../../modules/Product-Mngt/Prod'),
);
export default AppPage(() => <Products />);
