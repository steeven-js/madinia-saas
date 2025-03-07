// @mui
import { alpha, Theme } from '@mui/material/styles';

/***************************  OVERRIDES - MENU  ***************************/

export default function MenuItem(theme: Theme) {
  return {
    MuiMenuItem: {
      defaultProps: {
        disableGutters: true
      },
      styleOverrides: {
        root: {
          ...theme.typography.body2,
          padding: 10,
          borderRadius: 8,
          minHeight: 38,
          whiteSpace: 'unset',
          '&.Mui-selected.Mui-focusVisible': {
            backgroundColor: alpha(theme.palette.primary.main, 0.2)
          },
          '&.Mui-focusVisible': {
            backgroundColor: alpha(theme.palette.secondary.main, 0.08)
          },
          '&:not(:first-of-type):not(:last-of-type)': {
            marginTop: 2,
            marginBottom: 2
          },

          // Menu item list style
          '& .MuiTypography-custom': {
            color: theme.palette.grey[600],
            ...theme.applyStyles('dark', { color: theme.palette.grey[700] }),
            display: 'flex',
            alignItems: 'center',
            marginLeft: 16
          },
          '& .MuiListItemIcon-root': {
            minWidth: 22,
            marginRight: 6,
            '&:has(.MuiCheckbox-root)': {
              minHeight: 20
            }
          },
          '& .MuiListItemText-primary': {
            ...theme.typography.body2
          },
          '&:has(.MuiListItemIcon-root)': {
            padding: 9
          }
        }
      }
    }
  };
}
