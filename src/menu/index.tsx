// @project
import manage from './manage';
import other from './other';

// @types
import { NavItemType } from '../types/menu';

/***************************  MENU ITEMS  ***************************/

const menuItems: { items: NavItemType[] } = {
  items: [manage, other]
};

export default menuItems; 