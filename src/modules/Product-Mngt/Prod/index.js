import React from 'react';

import {useIntl} from 'react-intl';
import AppsContainer from '../../../@crema/core/AppsContainer';
import ProductListing from './ProductListing';

const Products = () => {
  const {messages} = useIntl();
  return (
    <AppsContainer title={messages['sidebar.ecommerce.products']} fullView>
      <ProductListing />
    </AppsContainer>
  );
};

export default Products;
