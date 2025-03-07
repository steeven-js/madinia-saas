// @mui
import { Theme } from '@mui/material/styles';

/***************************  OVERRIDES - MENU  ***************************/

export default function Menu(theme: Theme) {
  return {
    MuiMenu: {
      defaultProps: {
        slotProps: {
          paper: {
            elevation: 0,
            sx: {
              minWidth: 150,
              padding: 0.5,
              border: `1px solid ${theme.palette.divider}`,
              borderRadius: 3,
              boxShadow: theme.customShadows.tooltip
            }
          }
        }
      },
      styleOverrides: {
        list: { padding: 0 }
      }
    }
  };
}
