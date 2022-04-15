import {BiAlignLeft} from 'react-icons/bi';
import {BiCarousel, BiCartAlt} from 'react-icons/bi';
import {
  MdAddShoppingCart,
  MdDashboard,
  MdCases,
  MdOutlineOutbox,
  MdRedeem,
  MdStore,
  MdOutlineSupervisorAccount,
} from 'react-icons/md';

const routesConfig = [
  //Product Management Start
  {
    id: 'admin',
    title: 'Product Management',
    messageId: 'sidebar.products',
    type: 'group',
    children: [
      {
        id: 'prod',
        title: 'Products',
        messageId: 'sidebar.products.prod',
        type: 'item',
        icon: <MdAddShoppingCart />,
        url: '/product-mngt/prod',
      },
      {
        id: 'dashboard',
        title: 'Dashboard',
        messageId: 'sidebar.products.dashboard',
        type: 'item',
        icon: <MdDashboard />,
        url: '/product-mngt/dashboard',
      },
      {
        id: 'product',
        title: 'Products',
        messageId: 'sidebar.products.product',
        type: 'item',
        icon: <MdAddShoppingCart />,
        url: '/product-mngt/products',
      },
      {
        id: 'orders',
        title: 'Orders',
        messageId: 'sidebar.products.orders',
        type: 'item',
        icon: <BiAlignLeft />,
        url: '/product-mngt/orders',
      },
      {
        id: 'staff',
        title: 'Staff',
        messageId: 'sidebar.products.staff',
        type: 'item',
        icon: <MdOutlineSupervisorAccount />,
        url: '/product-mngt/page-3',
      },
    ],
  },
  //Product Management End

  //Store Management Start
  {
    id: 'store',
    title: 'Store Management',
    messageId: 'sidebar.store',
    type: 'group',
    children: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        messageId: 'sidebar.store.dashboard',
        type: 'item',
        icon: <MdDashboard />,
        url: '/store-list/dashboard',
      },
      {
        id: 'store',
        title: 'Store',
        messageId: 'sidebar.store.store',
        type: 'item',
        icon: <MdCases />,
        url: '/store-list/store',
      },
    ],
  },
  //Store Management End

  //User Management Start
  {
    id: 'usermngt',
    title: 'User Management',
    messageId: 'sidebar.usermngt',
    type: 'group',
    children: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        messageId: 'sidebar.usermngt.dashboard',
        type: 'item',
        icon: <MdDashboard />,
        url: '/user-mngt/dashboard',
      },
      {
        id: 'storeproducts',
        title: 'Store Products',
        messageId: 'sidebar.usermngt.storeproducts',
        type: 'item',
        icon: <MdStore />,
        url: '/user-mngt/my-orders',
      },
      {
        id: 'myproducts',
        title: 'My Products',
        messageId: 'sidebar.usermngt.myproducts',
        type: 'item',
        icon: <MdOutlineOutbox />,
        url: '/user-mngt/my-orders',
      },
      {
        id: 'myorders',
        title: 'My Orders',
        messageId: 'sidebar.usermngt.myorders',
        type: 'item',
        icon: <BiAlignLeft />,
        url: '/user-mngt/my-products',
      },
    ],
  },
  //User Management End
  //Subscription Start
  {
    id: 'subscription',
    title: 'Subscription',
    messageId: 'sidebar.subscription',
    type: 'group',
    children: [
      {
        id: 'plan',
        title: 'plan',
        messageId: 'sidebar.subscription.plan',
        type: 'item',
        icon: <MdRedeem />,
        url: '/subscription/plan',
      },
    ],
  },

  //Subscription End
];
export default routesConfig;
