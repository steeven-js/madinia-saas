// @project
import { NavItemType } from '../types/menu';
import { AuthRole } from '../enum';

// ==============================|| MENU ITEMS ||============================== //

const menuItems: { items: NavItemType[] } = {
  items: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'group',
      children: [
        {
          id: 'dashboard',
          title: 'Dashboard',
          type: 'item',
          url: '/dashboard',
          icon: 'IconDashboard',
          roles: [AuthRole.SUPER_ADMIN, AuthRole.ADMIN, AuthRole.USER]
        }
      ]
    },
    {
      id: 'pages',
      title: 'Pages',
      type: 'group',
      children: [
        {
          id: 'page1',
          title: 'Page 1',
          type: 'item',
          url: '/dashboard/page1',
          icon: 'IconLayoutGridAdd',
          roles: [AuthRole.SUPER_ADMIN, AuthRole.ADMIN, AuthRole.USER]
        },
        {
          id: 'page2',
          title: 'Page 2',
          type: 'item',
          url: '/dashboard/page2',
          icon: 'IconLayoutGridAdd',
          roles: [AuthRole.SUPER_ADMIN, AuthRole.ADMIN, AuthRole.USER]
        },
        {
          id: 'page3',
          title: 'Page 3',
          type: 'item',
          url: '/dashboard/page3',
          icon: 'IconLayoutGridAdd',
          roles: [AuthRole.SUPER_ADMIN, AuthRole.ADMIN, AuthRole.USER]
        },
        {
          id: 'users',
          title: 'Users',
          type: 'item',
          url: '/users',
          icon: 'IconUsers',
          roles: [AuthRole.SUPER_ADMIN, AuthRole.ADMIN]
        },
        {
          id: 'products',
          title: 'Products',
          type: 'collapse',
          icon: 'IconBuildingStore',
          roles: [AuthRole.SUPER_ADMIN, AuthRole.ADMIN],
          children: [
            {
              id: 'product-list',
              title: 'Product List',
              type: 'item',
              url: '/products',
              roles: [AuthRole.SUPER_ADMIN, AuthRole.ADMIN]
            },
            {
              id: 'product-add',
              title: 'Add Product',
              type: 'item',
              url: '/products/add',
              roles: [AuthRole.SUPER_ADMIN, AuthRole.ADMIN]
            }
          ]
        },
        {
          id: 'reports',
          title: 'Reports',
          type: 'item',
          url: '/reports',
          icon: 'IconReportAnalytics',
          roles: [AuthRole.SUPER_ADMIN, AuthRole.ADMIN]
        }
      ]
    },
    {
      id: 'settings',
      title: 'Settings',
      type: 'group',
      children: [
        {
          id: 'settings',
          title: 'Settings',
          type: 'item',
          url: '/settings',
          icon: 'IconSettings',
          roles: [AuthRole.SUPER_ADMIN, AuthRole.ADMIN, AuthRole.USER]
        }
      ]
    }
  ]
};

export default menuItems;