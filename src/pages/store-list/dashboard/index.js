import React from 'react';
import AppPage from '../../../@crema/hoc/AppPage';
import asyncComponent from '../../../@crema/utility/asyncComponent';

const Dashboard = asyncComponent(() =>
  import('../../../modules/Store-List/Dashboard'),
);
export default AppPage(() => <Dashboard />);
