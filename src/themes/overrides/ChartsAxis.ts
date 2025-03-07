// @mui
import { Theme } from '@mui/material/styles';

/***************************  OVERRIDES - CHARTS AXIS  ***************************/

export default function ChartsAxis(theme: Theme) {
  return {
    MuiChartsAxis: {
      styleOverrides: {
        root: {
          '& .MuiChartsAxis-tickLabel': {
            fill: theme.palette.text.secondary
          },
          '& .MuiChartsAxis-line': {
            stroke: theme.palette.divider
          }
        }
      }
    }
  };
}
