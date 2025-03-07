// @mui
import { Theme } from '@mui/material/styles';

/***************************  OVERRIDES - INPUT LABEL  ***************************/

export default function InputLabel(theme: Theme) {
  return {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          ...theme.typography.body2,
          color: theme.palette.text.primary,
          marginBottom: 6,
          '&.Mui-error': {
            color: theme.palette.error.main,
            ...theme.applyStyles('dark', { color: theme.palette.error.light })
          }
        },
        asterisk: {
          color: theme.palette.error.main,
          ...theme.applyStyles('dark', { color: theme.palette.error.light })
        }
      }
    }
  };
}
