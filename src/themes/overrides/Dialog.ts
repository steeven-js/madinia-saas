// @mui
import { Theme } from '@mui/material/styles';

/***************************  OVERRIDES - DIALOG  ***************************/

export default function Dialog(theme: Theme) {
  return {
    MuiDialog: {
      defaultProps: {
        PaperProps: { elevation: 0 }
      },
      styleOverrides: {
        paper: {
          border: `1px solid ${theme.palette.divider}`,
          borderRadius: 16,
          margin: 8
        },
        paperFullScreen: {
          margin: 0,
          borderRadius: 0
        }
      }
    }
  };
}
