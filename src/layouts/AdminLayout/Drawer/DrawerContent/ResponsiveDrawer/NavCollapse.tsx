import { useEffect, useState } from 'react';

// @react-router
import { useLocation } from 'react-router-dom';

// @mui
import { useTheme } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

// @project
import NavItem from './NavItem';
import DynamicIcon from 'src/components/DynamicIcon';
import { ThemeMode } from 'src/config';
import { AuthRole } from 'src/enum';
import { useAuth } from 'src/contexts/AuthContext';

// @types
import { NavItemType } from 'src/types/menu';
import { DynamicIconProps } from 'src/types/tabler';

// @assets
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';

// @style
const verticalDivider = {
  '&:after': {
    content: "''",
    position: 'absolute',
    left: 16,
    top: -2,
    height: `calc(100% + 2px)`,
    width: '1px',
    opacity: 1,
    bgcolor: 'divider'
  }
};

interface LoopProps {
  item: NavItemType;
  userRole: AuthRole | undefined;
}

/***************************  COLLAPSE - LOOP  ***************************/

function NavCollapseLoop({ item, userRole }: LoopProps) {
  return item.children?.map((item) => {
    // Check if menuItem has roles and whether userRole is allowed
    if (item.roles?.length && userRole && !item.roles.includes(userRole)) {
      return null;
    }

    switch (item.type) {
      case 'collapse':
        return <NavCollapse key={item.id} item={item} level={1} />;
      case 'item':
        return <NavItem key={item.id} item={item} level={1} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Fix - Collapse or Item
          </Typography>
        );
    }
  });
}

interface Props {
  item: NavItemType;
  level?: number;
}

/***************************  RESPONSIVE DRAWER - COLLAPSE  ***************************/

export default function NavCollapse({ item, level = 0 }: Props) {
  const theme = useTheme();
  const { userClaims } = useAuth();

  const [open, setOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string | null>(null);

  const userRole = userClaims?.role as AuthRole | undefined;

  // Active item collapse on page load with sub-levels
  const location = useLocation();
  const pathname = location.pathname;

  const checkOpenForParent = (child: NavItemType[], id: string) => {
    child.forEach((list: NavItemType) => {
      if (list.url === pathname) {
        setOpen(true);
        setSelected(id);
      }
    });
  };

  useEffect(() => {
    setOpen(false);
    setSelected(null);
    if (item.children) {
      item.children.forEach((list: NavItemType) => {
        if (list.children?.length) {
          checkOpenForParent(list.children, item.id!);
        }

        if (list.url === pathname) {
          setSelected(item.id!);
          setOpen(true);
        }
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, item.children]);

  const handleClick = () => {
    setOpen(!open);
  };

  const iconcolor =
    (open || selected === item.id) && theme.palette.mode === ThemeMode.DARK ? theme.palette.background.default : theme.palette.text.primary;

  return (
    <>
      <ListItemButton
        id={`${item.id}-btn`}
        selected={open || selected === item.id}
        sx={{
          my: 0.25,
          color: 'text.primary',
          '&.Mui-selected': {
            color: 'text.primary',
            ...theme.applyStyles?.('dark', { color: 'background.default' }),
            '&.Mui-focusVisible': { bgcolor: 'primary.light' }
          }
        }}
        onClick={handleClick}
      >
        {level === 0 && (
          <ListItemIcon>
            {typeof item.icon === 'string' ? (
              <DynamicIcon name={item.icon as DynamicIconProps['name']} color={iconcolor} size={18} stroke={1.5} />
            ) : (
              item.icon
            )}
          </ListItemIcon>
        )}
        <ListItemText primary={item.title} sx={{ mb: '-1px' }} />
        {open ? <IconChevronUp size={18} stroke={1.5} /> : <IconChevronDown size={18} stroke={1.5} />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" sx={{ p: 0, pl: 3, position: 'relative', ...verticalDivider }}>
          <NavCollapseLoop item={item} userRole={userRole} />
        </List>
      </Collapse>
    </>
  );
} 