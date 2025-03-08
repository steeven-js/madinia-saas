// @third-party
import { IconBrandAsana, IconLayoutGrid, IconUserCog, IconSettings } from '@tabler/icons-react';

// @project
import { AuthRole } from '../enum';

// @types
import { NavItemType } from '../types/menu';

/***************************  MENU ITEMS - APPLICATIONS  ***************************/

const manage: NavItemType = {
  id: 'group-manage',
  title: 'Gestion',
  icon: <IconBrandAsana size={20} stroke={1.5} />,
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Tableau de bord',
      type: 'item',
      url: '/dashboard/analytics',
      icon: <IconLayoutGrid size={20} stroke={1.5} />
    },
    {
      id: 'account',
      title: 'Compte',
      type: 'item',
      url: '/account',
      icon: <IconUserCog size={20} stroke={1.5} />,
      roles: [AuthRole.SUPER_ADMIN]
    },
    {
      id: 'setting',
      title: 'Paramètres',
      type: 'item',
      url: '/setting',
      icon: <IconSettings size={20} stroke={1.5} />,
      roles: [AuthRole.SUPER_ADMIN, AuthRole.ADMIN]
    }
  ]
};

export default manage; 