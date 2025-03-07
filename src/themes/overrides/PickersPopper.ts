// @mui
import { Theme } from '@mui/material/styles';

/***************************  OVERRIDES - PICKERS POPPER  ***************************/

export default function PickersPopper(theme: Theme) {
  return {
    MuiPickersPopper: {
      defaultProps: {
        slotProps: { paper: { elevation: 0 } }
      },
      styleOverrides: {
        root: {
          '& .MuiPaper-root': {
            borderRadius: 8,
            border: `1px solid ${theme.palette.divider}`,
            boxShadow: theme.customShadows.tooltip,
            backgroundImage: 'none'
          }
        }
      }
    }
  };
}
