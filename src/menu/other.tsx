// @third-party
import { FormattedMessage } from 'react-intl';

// @project
import { AuthRole } from '../enum';

// @types
import { NavItemType } from '../types/menu';

/***************************  MENU ITEMS - APPLICATIONS  ***************************/

const other: NavItemType = {
  id: 'group-other',
  title: 'Autres',
  icon: 'IconDotsVertical',
  type: 'group',
  children: [
    {
      id: 'components',
      title: 'Composants',
      type: 'collapse',
      icon: 'IconAppWindow',
      roles: [AuthRole.SUPER_ADMIN, AuthRole.ADMIN],
      children: [
        {
          id: 'avatar',
          title: 'Avatar',
          type: 'item',
          url: '/data-display/avatar'
        },
        {
          id: 'button',
          title: 'Bouton',
          type: 'item',
          url: '/inputs/button'
        },
        {
          id: 'card',
          title: 'Carte',
          type: 'item',
          url: '/surface/card'
        }
      ]
    },
    {
      id: 'charts',
      title: 'Graphiques',
      type: 'item',
      url: '/chart',
      icon: 'IconChartHistogram',
      roles: [AuthRole.SUPER_ADMIN, AuthRole.ADMIN]
    },
    {
      id: 'sample-page',
      title: 'Page d\'exemple',
      type: 'item',
      url: '/sample-page',
      icon: 'IconBrandChrome'
    }
  ]
};

export default other; 