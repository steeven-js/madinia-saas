// @mui
import { Palette, PaletteColor, Theme } from '@mui/material/styles';
import { LinearProgressProps } from '@mui/material/LinearProgress';

/***************************  COMPONENT - LINEAR PROGRESS  ***************************/

export default function LinearProgress(theme: Theme) {
  return {
    MuiLinearProgress: {
      defaultProps: {
        variant: 'determinate'
      },
      styleOverrides: {
        root: ({ ownerState }: { ownerState: LinearProgressProps }) => {
          const paletteColor = theme.palette[ownerState.color as keyof Palette] as PaletteColor;
          return {
            '& .MuiLinearProgress-bar': {
              backgroundColor: paletteColor.main,
              ...theme.applyStyles('dark', { backgroundColor: paletteColor.light })
            },
            borderRadius: 24,
            backgroundColor: theme.palette.grey[100],
            ...theme.applyStyles('dark', { backgroundColor: theme.palette.grey[300] }),
            variants: [
              {
                props: { type: 'light' },
                style: {
                  '& .MuiLinearProgress-bar': {
                    opacity: 0.6
                  }
                }
              }
            ]
          };
        },
        bar: {
          borderRadius: 24
        }
      }
    }
  };
}
