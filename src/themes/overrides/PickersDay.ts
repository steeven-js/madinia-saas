// @mui
import { Theme } from '@mui/material/styles';

/***************************  OVERRIDES - PICKERS DAY  ***************************/

export default function PickersDay(theme: Theme) {
  return {
    MuiPickersDay: {
      styleOverrides: {
        root: {
          ...theme.typography.body1,
          color: theme.palette.grey[700],
          ':not(.Mui-selected)': {
            borderColor: theme.palette.primary.main
          }
        },
        today: {
          color: theme.palette.primary.main
        }
      }
    }
  };
}
