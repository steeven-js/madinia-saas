// @mui
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';

// @project
import NavCollapse from './NavCollapse';
import NavItem from './NavItem';
import { useAuth } from 'src/contexts/AuthContext';

// @types
import { NavItemType } from 'src/types/menu';
import { AuthRole } from 'src/enum';

// @style
const groupDivider = {
  '&:before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    top: 0,
    left: 16,
    height: '1px',
    width: 44,
    bgcolor: 'divider'
  }
};

interface Props {
  item: NavItemType;
}

/***************************  MINI DRAWER - GROUP  ***************************/

export default function NavGroup({ item }: Props) {
  const { userClaims } = useAuth();

  const renderNavItem = (menuItem: NavItemType) => {
    const userRole = userClaims?.role as AuthRole | undefined;

    // Check if menuItem has roles and whether userRole is allowed
    if (menuItem.roles?.length && userRole && !menuItem.roles.includes(userRole)) {
      return null;
    }

    // Render items based on the type
    switch (menuItem.type) {
      case 'collapse':
        return <NavCollapse key={menuItem.id} item={menuItem} />;
      case 'item':
        return <NavItem key={menuItem.id} item={menuItem} />;
      default:
        return (
          <Typography key={menuItem.id} variant="h6" color="error" align="center">
            Error
          </Typography>
        );
    }
  };

  return (
    <List component="div" sx={{ '&:not(:first-of-type)': groupDivider }}>
      {item.children?.map((menuItem) => renderNavItem(menuItem))}
    </List>
  );
} 