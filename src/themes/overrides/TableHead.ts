// @mui
import { Theme } from '@mui/material/styles';

/***************************  OVERRIDES - TABLE HEAD  ***************************/

export default function TableHead(theme: Theme) {
  return {
    MuiTableHead: {
      styleOverrides: {
        root: { background: theme.palette.grey[100] }
      }
    }
  };
}
