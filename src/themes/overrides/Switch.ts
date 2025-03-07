// @mui
import { Palette, PaletteColor, Theme } from '@mui/material/styles';
import { SwitchProps } from '@mui/material/Switch';

interface SwitchSizeProps {
  width: number;
  height: number;
  base: number;
  thumb: number;
  trackRadius: number;
}

const colors: NonNullable<SwitchProps['color']>[] = ['primary', 'secondary', 'success', 'error', 'warning', 'info'];

/***************************  SWITCH - SIZE  ***************************/

function getSizeStyle(size?: SwitchProps['size']): SwitchSizeProps {
  switch (size) {
    case 'small':
      return { width: 34, height: 20, base: 14, thumb: 16, trackRadius: 16 };
    case 'large':
      return { width: 42, height: 24, base: 18, thumb: 20, trackRadius: 16 };
    case 'medium':
    default:
      return { width: 38, height: 22, base: 16, thumb: 18, trackRadius: 16 };
  }
}

function switchStyle(size?: SwitchProps['size']) {
  const sizes: SwitchSizeProps = getSizeStyle(size);

  return {
    width: sizes.width,
    height: sizes.height,
    '& .MuiSwitch-switchBase': {
      padding: 2,
      '&.Mui-checked': {
        transform: `translateX(${sizes.base}px)`
      }
    },
    '& .MuiSwitch-thumb': {
      width: sizes.thumb,
      height: sizes.thumb
    },
    '& .MuiSwitch-track': {
      borderRadius: sizes.trackRadius
    }
  };
}

/***************************  OVERRIDES - SWITCH  ***************************/

export default function Switch(theme: Theme) {
  const colorVariants = colors.map((color) => {
    const paletteColor = theme.palette[color as keyof Palette] as PaletteColor;

    return {
      props: { color },
      style: {
        '& .MuiSwitch-switchBase': {
          '&.Mui-checked': {
            '& ~ .MuiSwitch-track': {
              backgroundColor: paletteColor.main,
              ...theme.applyStyles('dark', { backgroundColor: paletteColor.light })
            }
          },
          '&:not(.Mui-checked) ~ .MuiSwitch-track': {
            backgroundColor: theme.palette.secondary.lighter,
            ...theme.applyStyles('dark', { backgroundColor: theme.palette.grey[700] })
          }
        }
      }
    };
  });

  return {
    MuiSwitch: {
      styleOverrides: {
        root: {
          color: theme.palette.text.primary,
          padding: 0,
          display: 'flex',
          ...switchStyle('medium'),
          variants: [...colorVariants]
        },
        track: {
          opacity: 1,
          backgroundColor: theme.palette.secondary.lighter,
          boxSizing: 'border-box'
        },
        thumb: {
          borderRadius: '50%',
          transition: theme.transitions.create(['width'], {
            duration: 200
          })
        },
        switchBase: {
          '&.Mui-checked': {
            color: theme.palette.background.default,
            '& ~ .MuiSwitch-track': {
              opacity: 1
            },
            '&.Mui-disabled': {
              color: theme.palette.background.paper,
              '~.MuiSwitch-track': {
                opacity: 0.1
              }
            }
          },
          '&.Mui-disabled': {
            color: theme.palette.background.paper,
            '~.MuiSwitch-track': {
              opacity: 0.3
            },
            cursor: 'not-allowed',
            pointerEvents: 'auto',
            '&:hover': {
              backgroundColor: 'transparent'
            }
          }
        },
        sizeLarge: { ...switchStyle('large'), '& ~ .MuiFormControlLabel-label': theme.typography.body1 },
        sizeSmall: { ...switchStyle('small'), '& ~ .MuiFormControlLabel-label': theme.typography.body2 }
      }
    }
  };
}
