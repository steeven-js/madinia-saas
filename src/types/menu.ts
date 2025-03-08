import { ReactNode } from 'react';

// @mui
import { ChipProps } from '@mui/material/Chip';

// @project
import { DynamicIconProps } from './tabler';
import { NavActionType } from 'src/enum';

export type NavActionProps = {
  type: NavActionType;
  label: string;
  // eslint-disable-next-line
  function?: any;
  url?: string;
  target?: boolean;
  icon: DynamicIconProps['name'];
};

export type NavItemType = {
  id: string;
  title: string | ReactNode;
  type: 'group' | 'item' | 'collapse';
  icon?: string;
  url?: string;
  target?: boolean;
  external?: boolean;
  disabled?: boolean;
  roles?: string[];
  chip?: {
    label: string;
    color: 'default' | 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
    size?: 'small' | 'medium';
    variant?: 'filled' | 'outlined';
  };
  children?: NavItemType[];
};

export type LinkTarget = '_blank' | '_self' | '_parent' | '_top';

export type MenuProps = {
  openedItem: string;
  isDashboardDrawerOpened: boolean; // Indicate if dashboard layout menu open or not
};

export type ListItemEventProps =
  | React.MouseEvent<HTMLButtonElement>
  | React.MouseEvent<HTMLAnchorElement>
  | React.MouseEvent<HTMLDivElement, MouseEvent>
  | undefined;
