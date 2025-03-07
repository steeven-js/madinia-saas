// @mui
import { Palette, PaletteColor, SliderProps } from '@mui/material';
import { alpha, Theme } from '@mui/material/styles';

// Define the list of colors that the Slider component will support
const colors: NonNullable<SliderProps['color']>[] = ['primary', 'secondary', 'success', 'error', 'warning', 'info'];

/***************************  COMPONENT - SLIDER  ***************************/

export default function Slider(theme: Theme) {
  // Generate color variants for the Slider component
  const colorVariants = colors.map((color) => {
    const paletteColor = theme.palette[color as keyof Palette] as PaletteColor;
    return {
      props: { color },
      style: {
        '& .MuiSlider-track': {
          ...theme.applyStyles('dark', { backgroundColor: paletteColor.light, borderColor: paletteColor.light })
        },
        '& .MuiSlider-thumb': {
          borderColor: paletteColor.main,
          ...theme.applyStyles('dark', { borderColor: paletteColor.light }),
          '&:focus, &:hover, &.Mui-focusVisible': {
            boxShadow: `0px 0px 0px 4px ${alpha(paletteColor.main, 0.2)}`
          },
          '&:active': {
            boxShadow: `0px 0px 0px 8px ${alpha(paletteColor.main, 0.5)}`
          }
        },
        '& .MuiSlider-valueLabel': {
          color: paletteColor.darker,
          backgroundColor: paletteColor.light,
          ...theme.applyStyles('dark', { color: theme.palette.background.default })
        }
      }
    };
  });

  return {
    MuiSlider: {
      styleOverrides: {
        track: {
          height: 6
        },
        thumb: {
          width: 10,
          height: 10,
          border: `2px solid ${theme.palette.primary.main}`,
          backgroundColor: theme.palette.background.default
        },
        rail: {
          height: 8,
          color: theme.palette.grey[100],
          ...theme.applyStyles('dark', { color: theme.palette.grey[300] })
        },
        valueLabel: {
          ...theme.typography.caption,
          minWidth: 40,
          padding: 6,
          borderRadius: 8,
          top: -12,
          '&:before': {
            width: 10,
            height: 10
          }
        },
        root: {
          variants: [...colorVariants],
          '&.Mui-disabled': {
            '& .MuiSlider-rail': {
              opacity: 0.25
            },
            '& .MuiSlider-track': {
              backgroundColor: theme.palette.action.disabled,
              borderColor: 'transparent'
            },
            '& .MuiSlider-thumb': {
              border: '2px solid',
              borderColor: theme.palette.action.disabled
            }
          }
        }
      }
    }
  };
}
