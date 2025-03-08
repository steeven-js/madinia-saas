import { useLocation, Link } from 'react-router-dom';

// @mui
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// @project
import menuItems from '../../../menu';
import { useAuth } from '../../../contexts/AuthContext';

// @types
import { NavItemType } from '../../../types/menu';

// Props
interface DrawerProps {
  open: boolean;
  handleDrawerToggle: () => void;
}

/***************************  DRAWER  ***************************/

export default function Drawer({ open, handleDrawerToggle }: DrawerProps) {
  const location = useLocation();
  const { userClaims } = useAuth();
  const currentRole = userClaims?.role;

  const renderNavItems = (items: NavItemType[] = []) => {
    return items.map((item) => {
      // Vérifier si l'élément a des restrictions de rôle
      if (item.roles && currentRole && !item.roles.includes(currentRole)) {
        return null;
      }

      // Élément de groupe
      if (item.type === 'group' && item.children) {
        return (
          <Box key={item.id} sx={{ mb: 1.5 }}>
            <Typography
              variant="subtitle2"
              sx={{
                px: 3,
                py: 1.5,
                color: 'text.secondary',
                fontWeight: 500,
                textTransform: 'uppercase',
                fontSize: '0.75rem'
              }}
            >
              {item.title}
            </Typography>
            <List disablePadding>{renderNavItems(item.children)}</List>
          </Box>
        );
      }

      // Élément de collapse
      if (item.type === 'collapse' && item.children) {
        const isActive = location.pathname.includes(item.url || '');
        return (
          <ListItem key={item.id} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                px: 2.5,
                py: 1,
                bgcolor: isActive ? 'action.selected' : 'transparent'
              }}
            >
              {item.icon && (
                <ListItemIcon sx={{ minWidth: 0, mr: 2, justifyContent: 'center' }}>
                  {item.icon}
                </ListItemIcon>
              )}
              <ListItemText
                primary={item.title}
                sx={{ opacity: open ? 1 : 0 }}
                primaryTypographyProps={{ noWrap: true }}
              />
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding sx={{ pl: 3 }}>
                {renderNavItems(item.children)}
              </List>
            </Collapse>
          </ListItem>
        );
      }

      // Élément simple
      if (item.type === 'item') {
        const isActive = location.pathname === item.url;
        return (
          <ListItem key={item.id} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              component={Link}
              to={item.url || '#'}
              sx={{
                minHeight: 48,
                px: 2.5,
                py: 1,
                bgcolor: isActive ? 'action.selected' : 'transparent'
              }}
            >
              {item.icon && (
                <ListItemIcon sx={{ minWidth: 0, mr: 2, justifyContent: 'center' }}>
                  {item.icon}
                </ListItemIcon>
              )}
              <ListItemText
                primary={item.title}
                sx={{ opacity: open ? 1 : 0 }}
                primaryTypographyProps={{ noWrap: true }}
              />
            </ListItemButton>
          </ListItem>
        );
      }

      return null;
    });
  };

  return (
    <MuiDrawer
      variant="permanent"
      open={open}
      sx={{
        width: open ? 240 : 64,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        '& .MuiDrawer-paper': {
          width: open ? 240 : 64,
          overflowX: 'hidden',
          transition: (theme) =>
            theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen
            })
        }
      }}
    >
      <Box sx={{ height: 64 }} /> {/* Espace pour le header */}
      <Divider />
      <Box sx={{ overflow: 'auto', mt: 2 }}>
        {menuItems.items.map((item) => renderNavItems([item]))}
      </Box>
    </MuiDrawer>
  );
} 