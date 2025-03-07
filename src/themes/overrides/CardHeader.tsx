// @mui
import { Theme } from '@mui/material/styles';

/***************************  OVERRIDES - CARD HEADER  ***************************/

export default function CardHeader(theme: Theme) {
  return {
    MuiCardHeader: {
      styleOverrides: {
        root: { padding: 20, borderBottom: `1px solid ${theme.palette.divider}` },
        action: { margin: 0 },
        content: {},
        title: { '& ~ span.MuiCardHeader-subheader': { marginTop: 4 } }
      }
    }
  };
}
