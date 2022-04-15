import React from 'react';
import AppPage from '../../@crema/hoc/AppPage';
import asyncComponent from '../../@crema/utility/asyncComponent';

const Page3 = asyncComponent(() => import('../../modules/Product-Mngt/Page3'));
export default AppPage(() => <Page3 />);
