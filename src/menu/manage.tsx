// @third-party
import { FormattedMessage } from 'react-intl';

// @project
import { AuthRole } from '../enum';

// @types
import { NavItemType } from '../types/menu';

/***************************  MENU ITEMS - APPLICATIONS  ***************************/

const manage: NavItemType = {
  id: 'group-manage',
  title: 'Gestion',
  icon: 'IconBrandAsana',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Tableau de bord',
      type: 'item',
      url: '/dashboard/analytics',
      icon: 'IconLayoutGrid'
    },
    {
      id: 'account',
      title: 'Compte',
      type: 'item',
      url: '/account',
      icon: 'IconUserCog',
      roles: [AuthRole.SUPER_ADMIN]
    },
    {
      id: 'setting',
      title: 'Paramètres',
      type: 'item',
      url: '/setting',
      icon: 'IconSettings',
      roles: [AuthRole.SUPER_ADMIN, AuthRole.ADMIN]
    }
  ]
};

export default manage; 