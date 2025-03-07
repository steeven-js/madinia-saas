// @mui
import { Palette, PaletteColor, Theme } from '@mui/material/styles';
import { CheckboxProps } from '@mui/material/Checkbox';

// @project
import { ThemeDirection, ThemeMode } from '@/config';
import { generateFocusStyle } from '@/utils/generateFocusStyle';

// @assets
import { IconSquare, IconSquareCheckFilled, IconSquareMinusFilled } from '@tabler/icons-react';

const colors: NonNullable<CheckboxProps['color']>[] = ['primary', 'secondary', 'success', 'error', 'warning', 'info'];

/***************************  OVERRIDES - CHECKBOX  ***************************/

export default function Checkbox(theme: Theme) {
  const colorVariants = colors.map((color) => {
    const paletteColor = theme.palette[color as keyof Palette] as PaletteColor;

    return {
      props: { color },
      style: {
        ...theme.applyStyles('dark', {
          '&.Mui-checked, &.MuiCheckbox-indeterminate': { color: paletteColor.light }
        })
      }
    };
  });

  return {
    MuiCheckbox: {
      defaultProps: {
        disableFocusRipple: true,
        icon: <IconSquare stroke={1} size={16} color={theme.palette.grey[theme.palette.mode === ThemeMode.DARK ? 700 : 500]} />,
        checkedIcon: <IconSquareCheckFilled stroke={1} size={16} />,
        indeterminateIcon: <IconSquareMinusFilled stroke={1} size={16} />
      },
      styleOverrides: {
        root: {
          variants: [...colorVariants],
          padding: 6.675,
          ...(theme.direction !== ThemeDirection.RTL && { marginLeft: 2.325 }), // 9 - 6.675 = For fix position of checkbox according to custom padd ing
          ...(theme.direction === ThemeDirection.RTL && { marginRight: 2.325 }),
          borderRadius: 4,
          color: theme.palette.grey[500],
          '&:hover:not(.Mui-checked):not(.MuiCheckbox-indeterminate)': {
            color: theme.palette.grey[600]
          },
          '& ~ .MuiFormControlLabel-label': theme.typography.body2,
          '& svg': { width: 21.34, height: 21.34 },
          '&.Mui-disabled': {
            cursor: 'not-allowed',
            pointerEvents: 'auto',
            ...theme.applyStyles('dark', { opacity: 0.5 }),
            '&:hover': {
              backgroundColor: 'transparent'
            }
          },
          '& .MuiTouchRipple-root span': {
            borderRadius: 4
          },
          '&.Mui-focusVisible': {
            '& svg': { borderRadius: 4, ...generateFocusStyle(theme.palette.primary.main) }
          }
        },
        sizeSmall: {
          '& ~ .MuiFormControlLabel-label': theme.typography.caption,
          '& svg': { width: 18.6725, height: 18.6725 }
        },
        sizeLarge: {
          '& ~ .MuiFormControlLabel-label': theme.typography.body1,
          '& svg': { width: 26.675, height: 26.675 }
        }
      }
    }
  };
}
