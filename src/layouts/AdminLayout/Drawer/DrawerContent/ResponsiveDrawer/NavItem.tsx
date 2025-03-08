import { useEffect } from 'react';

// @react-router
import { Link, useLocation } from 'react-router-dom';

// @mui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// @project
import DynamicIcon from 'src/components/DynamicIcon';
import { ThemeMode } from 'src/config';

// @types
import { NavItemType } from 'src/types/menu';
import { DynamicIconProps } from 'src/types/tabler';

interface Props {
  item: NavItemType;
  level?: number;
}

/***************************  RESPONSIVE DRAWER - ITEM  ***************************/

export default function NavItem({ item, level = 0 }: Props) {
  const theme = useTheme();
  const location = useLocation();
  const pathname = location.pathname;

  const downMD = useMediaQuery(theme.breakpoints.down('md'));

  // Active menu item on page load
  const isSelected = pathname === item.url;

  const iconcolor =
    isSelected && theme.palette.mode === ThemeMode.DARK ? theme.palette.background.default : theme.palette.text.primary;

  const itemHandler = () => {
    // Close drawer on mobile when item is clicked
    if (downMD) {
      // TODO: Add drawer close handler if needed
    }
  };

  return (
    <ListItemButton
      id={`${item.id}-btn`}
      component={Link}
      to={item.url!}
      {...(item?.target && { target: '_blank' })}
      selected={isSelected}
      disabled={item.disabled}
      onClick={itemHandler}
      sx={{
        color: 'text.primary',
        ...(level === 0 && { my: 0.25, '&.Mui-selected.Mui-focusVisible': { bgcolor: 'primary.light' } }),
        ...(level > 0 && {
          '&.Mui-selected': {
            color: 'primary.main',
            bgcolor: 'transparent',
            ...theme.applyStyles?.('dark', { color: 'primary.light' }),
            '&:hover': { bgcolor: 'action.hover' },
            '&.Mui-focusVisible': { bgcolor: 'action.focus' },
            '& .MuiTypography-root': { fontWeight: 600 }
          }
        })
      }}
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
    </ListItemButton>
  );
} 