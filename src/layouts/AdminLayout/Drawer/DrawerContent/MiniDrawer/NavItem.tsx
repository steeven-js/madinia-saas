import { useEffect } from 'react';

// @react-router
import { Link, useLocation } from 'react-router-dom';

// @mui
import { useTheme } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import ListItemAvatar from '@mui/material/ListItemAvatar';
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

/***************************  MINI DRAWER - ITEM  ***************************/

export default function NavItem({ item, level = 0 }: Props) {
  const theme = useTheme();
  const location = useLocation();
  const pathname = location.pathname;

  // Active menu item on page load
  const isSelected = pathname === item.url;
  const iconcolor = isSelected && theme.palette.mode === ThemeMode.DARK ? theme.palette.background.default : theme.palette.text.primary;

  // level === 0 - list item button avatar style
  const listItemAvatarStyle = {
    p: 0,
    my: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'default',
    '&:hover, &:focus': { bgcolor: 'transparent', '& .MuiListItemAvatar-root': { bgcolor: 'action.hover' } },
    '&.Mui-selected': {
      bgcolor: 'transparent',
      '& .MuiListItemAvatar-root': { bgcolor: 'primary.lighter', ...theme.applyStyles?.('dark', { bgcolor: 'primary.main' }) },
      '&:hover, &:focus': { bgcolor: 'transparent', '& .MuiListItemAvatar-root': { bgcolor: 'primary.light' } }
    }
  };

  // level > 0 - popup list item text style
  const listItemStyle = {
    color: 'text.primary',
    '&.Mui-selected': {
      color: 'primary.main',
      bgcolor: 'transparent',
      ...theme.applyStyles?.('dark', { color: 'primary.light' }),
      '&:hover': { bgcolor: 'action.hover' },
      '&.Mui-focusVisible': { bgcolor: 'action.focus' },
      '& .MuiTypography-root': { fontWeight: 600 }
    }
  };

  return (
    <ListItemButton
      id={`${item.id}-btn`}
      selected={isSelected}
      disabled={item.disabled}
      disableRipple={level === 0}
      {...(level > 0 && { component: Link, to: item.url!, ...(item?.target && { target: '_blank' }) })}
      sx={{ ...(level === 0 ? listItemAvatarStyle : listItemStyle) }}
    >
      {level === 0 && (
        <ButtonBase
          component={Link}
          to={item.url!}
          {...(item?.target && { target: '_blank' })}
          tabIndex={-1}
          sx={{ borderRadius: 2 }}
          aria-label="list-button"
        >
          <ListItemAvatar
            sx={{
              minWidth: 32,
              width: 44,
              height: 44,
              borderRadius: 2,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <ListItemIcon sx={{ minWidth: 0 }}>
              {typeof item.icon === 'string' ? (
                <DynamicIcon name={item.icon as DynamicIconProps['name']} size={22} stroke={1.5} color={iconcolor} />
              ) : (
                item.icon
              )}
            </ListItemIcon>
          </ListItemAvatar>
        </ButtonBase>
      )}
      {level > 0 && <ListItemText primary={item.title} />}
    </ListItemButton>
  );
} 