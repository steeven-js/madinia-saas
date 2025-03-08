import React from 'react';

// @project
import { NavItemType } from '../types/menu';
import { AuthRole } from '../enum';

// @assets
import { IconDashboard, IconSettings, IconUsers, IconBuildingStore, IconReportAnalytics } from '@tabler/icons-react';

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
          icon: <IconDashboard size={20} stroke={1.5} />,
          roles: [AuthRole.SUPER_ADMIN, AuthRole.ADMIN, AuthRole.USER]
        }
      ]
    },
    {
      id: 'management',
      title: 'Management',
      type: 'group',
      children: [
        {
          id: 'users',
          title: 'Users',
          type: 'item',
          url: '/users',
          icon: <IconUsers size={20} stroke={1.5} />,
          roles: [AuthRole.SUPER_ADMIN, AuthRole.ADMIN]
        },
        {
          id: 'products',
          title: 'Products',
          type: 'collapse',
          icon: <IconBuildingStore size={20} stroke={1.5} />,
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
          icon: <IconReportAnalytics size={20} stroke={1.5} />,
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
          icon: <IconSettings size={20} stroke={1.5} />,
          roles: [AuthRole.SUPER_ADMIN, AuthRole.ADMIN, AuthRole.USER]
        }
      ]
    }
  ]
};

export default menuItems; 