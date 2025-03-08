import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';

// @mui
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// @project
import DrawerContent from './DrawerContent';
import DrawerHeader from './DrawerHeader';
import MiniDrawerStyled from './MiniDrawerStyled';
import { useAuth } from 'src/contexts/AuthContext';
import { DRAWER_WIDTH } from 'src/config';

// @types
import { NavItemType } from 'src/types/menu';

// Props
interface DrawerProps {
  open: boolean;
  window?: () => Window;
}

/***************************  ADMIN LAYOUT - DRAWER  ***************************/

export default function Drawer({ open, window }: DrawerProps) {
  const theme = useTheme();
  const downLG = useMediaQuery(theme.breakpoints.down('lg'));
  const location = useLocation();
  const { userClaims } = useAuth();

  // Define container for drawer when window is specified
  const container = window !== undefined ? () => window().document.body : undefined;

  // Render menu items based on user role
  const renderNavItems = (items: NavItemType[] = []) => {
    return items.map((item) => {
      // Check if item has roles and if user has required role
      if (item.roles?.length && userClaims?.role && !item.roles.includes(userClaims.role)) {
        return null;
      }

      // Render based on item type
      switch (item.type) {
        case 'group':
          return (
            <List key={item.id} subheader={item.title && <Typography variant="caption">{item.title}</Typography>}>
              {item.children && renderNavItems(item.children)}
            </List>
          );
        case 'collapse':
          return (
            <ListItem key={item.id} disablePadding>
              <ListItemButton selected={location.pathname.includes(item.id!)}>
                {item.icon && <ListItemIcon>{typeof item.icon === 'string' ? null : item.icon}</ListItemIcon>}
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          );
        case 'item':
          return (
            <ListItem key={item.id} disablePadding>
              <ListItemButton
                selected={location.pathname === item.url}
                component="a"
                href={item.url}
                target={item.target ? '_blank' : undefined}
              >
                {item.icon && <ListItemIcon>{typeof item.icon === 'string' ? null : item.icon}</ListItemIcon>}
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          );
        default:
          return null;
      }
    });
  };

  // Memoize drawer content and header to prevent unnecessary re-renders
  const drawerContent = useMemo(() => <DrawerContent open={open} />, [open]);
  const drawerHeader = useMemo(() => <DrawerHeader open={open} />, [open]);

  return (
    <Box component="nav" sx={{ flexShrink: { md: 0 }, zIndex: 1200 }} aria-label="mailbox folders">
      {downLG ? (
        // Temporary drawer for smaller screens
        <MuiDrawer
          container={container}
          variant="temporary"
          open={open}
          ModalProps={{ keepMounted: true }}
          PaperProps={{
            sx: {
              boxSizing: 'border-box',
              width: DRAWER_WIDTH,
              borderRight: '1px solid',
              borderRightColor: 'divider',
              backgroundImage: 'none',
              boxShadow: 'inherit'
            }
          }}
          sx={{ display: { xs: 'block', lg: 'none' } }}
        >
          {drawerHeader}
          <Divider sx={{ mx: 2 }} />
          {drawerContent}
        </MuiDrawer>
      ) : (
        // Permanent drawer for larger screens
        <MiniDrawerStyled variant="permanent" open={open}>
          {drawerHeader}
          <Divider sx={{ mx: 2 }} />
          {drawerContent}
        </MiniDrawerStyled>
      )}
    </Box>
  );
} 